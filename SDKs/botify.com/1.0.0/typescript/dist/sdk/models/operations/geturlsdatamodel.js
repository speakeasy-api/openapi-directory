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
exports.GetUrlsDatamodelResponse = exports.GetUrlsDatamodelRequest = exports.GetUrlsDatamodelQueryParams = exports.GetUrlsDatamodelAreaEnum = exports.GetUrlsDatamodelPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUrlsDatamodelPathParams = /** @class */ (function (_super) {
    __extends(GetUrlsDatamodelPathParams, _super);
    function GetUrlsDatamodelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=analysis_slug" }),
        __metadata("design:type", String)
    ], GetUrlsDatamodelPathParams.prototype, "analysisSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_slug" }),
        __metadata("design:type", String)
    ], GetUrlsDatamodelPathParams.prototype, "projectSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetUrlsDatamodelPathParams.prototype, "username", void 0);
    return GetUrlsDatamodelPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUrlsDatamodelPathParams = GetUrlsDatamodelPathParams;
var GetUrlsDatamodelAreaEnum;
(function (GetUrlsDatamodelAreaEnum) {
    GetUrlsDatamodelAreaEnum["Current"] = "current";
    GetUrlsDatamodelAreaEnum["Disappeared"] = "disappeared";
    GetUrlsDatamodelAreaEnum["New"] = "new";
    GetUrlsDatamodelAreaEnum["SearchEnginesOrphans"] = "search_engines_orphans";
})(GetUrlsDatamodelAreaEnum = exports.GetUrlsDatamodelAreaEnum || (exports.GetUrlsDatamodelAreaEnum = {}));
var GetUrlsDatamodelQueryParams = /** @class */ (function (_super) {
    __extends(GetUrlsDatamodelQueryParams, _super);
    function GetUrlsDatamodelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=area" }),
        __metadata("design:type", String)
    ], GetUrlsDatamodelQueryParams.prototype, "area", void 0);
    return GetUrlsDatamodelQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUrlsDatamodelQueryParams = GetUrlsDatamodelQueryParams;
var GetUrlsDatamodelRequest = /** @class */ (function (_super) {
    __extends(GetUrlsDatamodelRequest, _super);
    function GetUrlsDatamodelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUrlsDatamodelPathParams)
    ], GetUrlsDatamodelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUrlsDatamodelQueryParams)
    ], GetUrlsDatamodelRequest.prototype, "queryParams", void 0);
    return GetUrlsDatamodelRequest;
}(utils_1.SpeakeasyBase));
exports.GetUrlsDatamodelRequest = GetUrlsDatamodelRequest;
var GetUrlsDatamodelResponse = /** @class */ (function (_super) {
    __extends(GetUrlsDatamodelResponse, _super);
    function GetUrlsDatamodelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUrlsDatamodelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CrawlDatamodel)
    ], GetUrlsDatamodelResponse.prototype, "crawlDatamodel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DefaultPayload)
    ], GetUrlsDatamodelResponse.prototype, "defaultPayload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUrlsDatamodelResponse.prototype, "statusCode", void 0);
    return GetUrlsDatamodelResponse;
}(utils_1.SpeakeasyBase));
exports.GetUrlsDatamodelResponse = GetUrlsDatamodelResponse;
