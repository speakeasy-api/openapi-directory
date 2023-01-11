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
exports.CreateQuantumTaskResponse = exports.CreateQuantumTaskRequest = exports.CreateQuantumTaskRequestBody = exports.CreateQuantumTaskHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateQuantumTaskHeaders = /** @class */ (function (_super) {
    __extends(CreateQuantumTaskHeaders, _super);
    function CreateQuantumTaskHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateQuantumTaskHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateQuantumTaskHeaders = CreateQuantumTaskHeaders;
var CreateQuantumTaskRequestBody = /** @class */ (function (_super) {
    __extends(CreateQuantumTaskRequestBody, _super);
    function CreateQuantumTaskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskRequestBody.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceArn" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskRequestBody.prototype, "deviceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceParameters" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskRequestBody.prototype, "deviceParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outputS3Bucket" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskRequestBody.prototype, "outputS3Bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outputS3KeyPrefix" }),
        __metadata("design:type", String)
    ], CreateQuantumTaskRequestBody.prototype, "outputS3KeyPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shots" }),
        __metadata("design:type", Number)
    ], CreateQuantumTaskRequestBody.prototype, "shots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateQuantumTaskRequestBody.prototype, "tags", void 0);
    return CreateQuantumTaskRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateQuantumTaskRequestBody = CreateQuantumTaskRequestBody;
var CreateQuantumTaskRequest = /** @class */ (function (_super) {
    __extends(CreateQuantumTaskRequest, _super);
    function CreateQuantumTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateQuantumTaskHeaders)
    ], CreateQuantumTaskRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateQuantumTaskRequestBody)
    ], CreateQuantumTaskRequest.prototype, "request", void 0);
    return CreateQuantumTaskRequest;
}(utils_1.SpeakeasyBase));
exports.CreateQuantumTaskRequest = CreateQuantumTaskRequest;
var CreateQuantumTaskResponse = /** @class */ (function (_super) {
    __extends(CreateQuantumTaskResponse, _super);
    function CreateQuantumTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateQuantumTaskResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateQuantumTaskResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateQuantumTaskResponse)
    ], CreateQuantumTaskResponse.prototype, "createQuantumTaskResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateQuantumTaskResponse.prototype, "deviceOfflineException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateQuantumTaskResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateQuantumTaskResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateQuantumTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateQuantumTaskResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateQuantumTaskResponse.prototype, "validationException", void 0);
    return CreateQuantumTaskResponse;
}(utils_1.SpeakeasyBase));
exports.CreateQuantumTaskResponse = CreateQuantumTaskResponse;
