"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUrlsExportResponse = exports.CreateUrlsExportRequest = exports.CreateUrlsExportQueryParams = exports.CreateUrlsExportAreaEnum = exports.CreateUrlsExportPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateUrlsExportPathParams = /** @class */ (function (_super) {
    __extends(CreateUrlsExportPathParams, _super);
    function CreateUrlsExportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=analysis_slug" }),
        __metadata("design:type", String)
    ], CreateUrlsExportPathParams.prototype, "analysisSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_slug" }),
        __metadata("design:type", String)
    ], CreateUrlsExportPathParams.prototype, "projectSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], CreateUrlsExportPathParams.prototype, "username", void 0);
    return CreateUrlsExportPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateUrlsExportPathParams = CreateUrlsExportPathParams;
var CreateUrlsExportAreaEnum;
(function (CreateUrlsExportAreaEnum) {
    CreateUrlsExportAreaEnum["Current"] = "current";
    CreateUrlsExportAreaEnum["Disappeared"] = "disappeared";
    CreateUrlsExportAreaEnum["New"] = "new";
    CreateUrlsExportAreaEnum["SearchEnginesOrphans"] = "search_engines_orphans";
})(CreateUrlsExportAreaEnum = exports.CreateUrlsExportAreaEnum || (exports.CreateUrlsExportAreaEnum = {}));
var CreateUrlsExportQueryParams = /** @class */ (function (_super) {
    __extends(CreateUrlsExportQueryParams, _super);
    function CreateUrlsExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=area" }),
        __metadata("design:type", String)
    ], CreateUrlsExportQueryParams.prototype, "area", void 0);
    return CreateUrlsExportQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateUrlsExportQueryParams = CreateUrlsExportQueryParams;
var CreateUrlsExportRequest = /** @class */ (function (_super) {
    __extends(CreateUrlsExportRequest, _super);
    function CreateUrlsExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUrlsExportPathParams)
    ], CreateUrlsExportRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateUrlsExportQueryParams)
    ], CreateUrlsExportRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UrlsQuery)
    ], CreateUrlsExportRequest.prototype, "request", void 0);
    return CreateUrlsExportRequest;
}(utils_1.SpeakeasyBase));
exports.CreateUrlsExportRequest = CreateUrlsExportRequest;
var CreateUrlsExportResponse = /** @class */ (function (_super) {
    __extends(CreateUrlsExportResponse, _super);
    function CreateUrlsExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateUrlsExportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CsvExportStatus)
    ], CreateUrlsExportResponse.prototype, "csvExportStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DefaultPayload)
    ], CreateUrlsExportResponse.prototype, "defaultPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateUrlsExportResponse.prototype, "statusCode", void 0);
    return CreateUrlsExportResponse;
}(utils_1.SpeakeasyBase));
exports.CreateUrlsExportResponse = CreateUrlsExportResponse;
