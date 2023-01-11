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
exports.ChecksListAnnotationsResponse = exports.ChecksListAnnotationsRequest = exports.ChecksListAnnotationsQueryParams = exports.ChecksListAnnotationsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ChecksListAnnotationsPathParams = /** @class */ (function (_super) {
    __extends(ChecksListAnnotationsPathParams, _super);
    function ChecksListAnnotationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=check_run_id" }),
        __metadata("design:type", Number)
    ], ChecksListAnnotationsPathParams.prototype, "checkRunId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ChecksListAnnotationsPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ChecksListAnnotationsPathParams.prototype, "repo", void 0);
    return ChecksListAnnotationsPathParams;
}(utils_1.SpeakeasyBase));
exports.ChecksListAnnotationsPathParams = ChecksListAnnotationsPathParams;
var ChecksListAnnotationsQueryParams = /** @class */ (function (_super) {
    __extends(ChecksListAnnotationsQueryParams, _super);
    function ChecksListAnnotationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ChecksListAnnotationsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ChecksListAnnotationsQueryParams.prototype, "perPage", void 0);
    return ChecksListAnnotationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ChecksListAnnotationsQueryParams = ChecksListAnnotationsQueryParams;
var ChecksListAnnotationsRequest = /** @class */ (function (_super) {
    __extends(ChecksListAnnotationsRequest, _super);
    function ChecksListAnnotationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChecksListAnnotationsPathParams)
    ], ChecksListAnnotationsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ChecksListAnnotationsQueryParams)
    ], ChecksListAnnotationsRequest.prototype, "queryParams", void 0);
    return ChecksListAnnotationsRequest;
}(utils_1.SpeakeasyBase));
exports.ChecksListAnnotationsRequest = ChecksListAnnotationsRequest;
var ChecksListAnnotationsResponse = /** @class */ (function (_super) {
    __extends(ChecksListAnnotationsResponse, _super);
    function ChecksListAnnotationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ChecksListAnnotationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ChecksListAnnotationsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ChecksListAnnotationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.CheckAnnotation }),
        __metadata("design:type", Array)
    ], ChecksListAnnotationsResponse.prototype, "checkAnnotations", void 0);
    return ChecksListAnnotationsResponse;
}(utils_1.SpeakeasyBase));
exports.ChecksListAnnotationsResponse = ChecksListAnnotationsResponse;
