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
exports.StartImportResponse = exports.StartImportRequest = exports.StartImportRequestBody = exports.StartImportRequestBodyResourceSpecification = exports.StartImportRequestBodyMergeStrategyEnum = exports.StartImportHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var StartImportHeaders = /** @class */ (function (_super) {
    __extends(StartImportHeaders, _super);
    function StartImportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartImportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartImportHeaders;
}(utils_1.SpeakeasyBase));
exports.StartImportHeaders = StartImportHeaders;
var StartImportRequestBodyMergeStrategyEnum;
(function (StartImportRequestBodyMergeStrategyEnum) {
    StartImportRequestBodyMergeStrategyEnum["Overwrite"] = "Overwrite";
    StartImportRequestBodyMergeStrategyEnum["FailOnConflict"] = "FailOnConflict";
})(StartImportRequestBodyMergeStrategyEnum = exports.StartImportRequestBodyMergeStrategyEnum || (exports.StartImportRequestBodyMergeStrategyEnum = {}));
// StartImportRequestBodyResourceSpecification
/**
 * Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
**/
var StartImportRequestBodyResourceSpecification = /** @class */ (function (_super) {
    __extends(StartImportRequestBodyResourceSpecification, _super);
    function StartImportRequestBodyResourceSpecification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botImportSpecification" }),
        __metadata("design:type", shared.BotImportSpecification)
    ], StartImportRequestBodyResourceSpecification.prototype, "botImportSpecification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=botLocaleImportSpecification" }),
        __metadata("design:type", shared.BotLocaleImportSpecification)
    ], StartImportRequestBodyResourceSpecification.prototype, "botLocaleImportSpecification", void 0);
    return StartImportRequestBodyResourceSpecification;
}(utils_1.SpeakeasyBase));
exports.StartImportRequestBodyResourceSpecification = StartImportRequestBodyResourceSpecification;
var StartImportRequestBody = /** @class */ (function (_super) {
    __extends(StartImportRequestBody, _super);
    function StartImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filePassword" }),
        __metadata("design:type", String)
    ], StartImportRequestBody.prototype, "filePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=importId" }),
        __metadata("design:type", String)
    ], StartImportRequestBody.prototype, "importId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mergeStrategy" }),
        __metadata("design:type", String)
    ], StartImportRequestBody.prototype, "mergeStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceSpecification" }),
        __metadata("design:type", StartImportRequestBodyResourceSpecification)
    ], StartImportRequestBody.prototype, "resourceSpecification", void 0);
    return StartImportRequestBody;
}(utils_1.SpeakeasyBase));
exports.StartImportRequestBody = StartImportRequestBody;
var StartImportRequest = /** @class */ (function (_super) {
    __extends(StartImportRequest, _super);
    function StartImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartImportHeaders)
    ], StartImportRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartImportRequestBody)
    ], StartImportRequest.prototype, "request", void 0);
    return StartImportRequest;
}(utils_1.SpeakeasyBase));
exports.StartImportRequest = StartImportRequest;
var StartImportResponse = /** @class */ (function (_super) {
    __extends(StartImportResponse, _super);
    function StartImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], StartImportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.StartImportResponse)
    ], StartImportResponse.prototype, "startImportResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], StartImportResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartImportResponse.prototype, "validationException", void 0);
    return StartImportResponse;
}(utils_1.SpeakeasyBase));
exports.StartImportResponse = StartImportResponse;
