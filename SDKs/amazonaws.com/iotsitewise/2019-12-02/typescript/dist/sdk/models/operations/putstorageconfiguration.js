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
exports.PutStorageConfigurationResponse = exports.PutStorageConfigurationRequest = exports.PutStorageConfigurationRequestBody = exports.PutStorageConfigurationRequestBodyStorageTypeEnum = exports.PutStorageConfigurationRequestBodyMultiLayerStorage = exports.PutStorageConfigurationHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutStorageConfigurationHeaders = /** @class */ (function (_super) {
    __extends(PutStorageConfigurationHeaders, _super);
    function PutStorageConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutStorageConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutStorageConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutStorageConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutStorageConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutStorageConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutStorageConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutStorageConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutStorageConfigurationHeaders;
}(utils_1.SpeakeasyBase));
exports.PutStorageConfigurationHeaders = PutStorageConfigurationHeaders;
// PutStorageConfigurationRequestBodyMultiLayerStorage
/**
 * Contains information about the storage destination.
**/
var PutStorageConfigurationRequestBodyMultiLayerStorage = /** @class */ (function (_super) {
    __extends(PutStorageConfigurationRequestBodyMultiLayerStorage, _super);
    function PutStorageConfigurationRequestBodyMultiLayerStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customerManagedS3Storage" }),
        __metadata("design:type", shared.CustomerManagedS3Storage)
    ], PutStorageConfigurationRequestBodyMultiLayerStorage.prototype, "customerManagedS3Storage", void 0);
    return PutStorageConfigurationRequestBodyMultiLayerStorage;
}(utils_1.SpeakeasyBase));
exports.PutStorageConfigurationRequestBodyMultiLayerStorage = PutStorageConfigurationRequestBodyMultiLayerStorage;
var PutStorageConfigurationRequestBodyStorageTypeEnum;
(function (PutStorageConfigurationRequestBodyStorageTypeEnum) {
    PutStorageConfigurationRequestBodyStorageTypeEnum["SitewiseDefaultStorage"] = "SITEWISE_DEFAULT_STORAGE";
    PutStorageConfigurationRequestBodyStorageTypeEnum["MultiLayerStorage"] = "MULTI_LAYER_STORAGE";
})(PutStorageConfigurationRequestBodyStorageTypeEnum = exports.PutStorageConfigurationRequestBodyStorageTypeEnum || (exports.PutStorageConfigurationRequestBodyStorageTypeEnum = {}));
var PutStorageConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(PutStorageConfigurationRequestBody, _super);
    function PutStorageConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multiLayerStorage" }),
        __metadata("design:type", PutStorageConfigurationRequestBodyMultiLayerStorage)
    ], PutStorageConfigurationRequestBody.prototype, "multiLayerStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storageType" }),
        __metadata("design:type", String)
    ], PutStorageConfigurationRequestBody.prototype, "storageType", void 0);
    return PutStorageConfigurationRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutStorageConfigurationRequestBody = PutStorageConfigurationRequestBody;
var PutStorageConfigurationRequest = /** @class */ (function (_super) {
    __extends(PutStorageConfigurationRequest, _super);
    function PutStorageConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutStorageConfigurationHeaders)
    ], PutStorageConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutStorageConfigurationRequestBody)
    ], PutStorageConfigurationRequest.prototype, "request", void 0);
    return PutStorageConfigurationRequest;
}(utils_1.SpeakeasyBase));
exports.PutStorageConfigurationRequest = PutStorageConfigurationRequest;
var PutStorageConfigurationResponse = /** @class */ (function (_super) {
    __extends(PutStorageConfigurationResponse, _super);
    function PutStorageConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutStorageConfigurationResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutStorageConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutStorageConfigurationResponse.prototype, "internalFailureException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutStorageConfigurationResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutStorageConfigurationResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PutStorageConfigurationResponse)
    ], PutStorageConfigurationResponse.prototype, "putStorageConfigurationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutStorageConfigurationResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutStorageConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutStorageConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutStorageConfigurationResponse.prototype, "throttlingException", void 0);
    return PutStorageConfigurationResponse;
}(utils_1.SpeakeasyBase));
exports.PutStorageConfigurationResponse = PutStorageConfigurationResponse;
