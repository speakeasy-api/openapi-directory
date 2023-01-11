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
exports.AcknowledgeThirdPartyJobResponse = exports.AcknowledgeThirdPartyJobRequest = exports.AcknowledgeThirdPartyJobHeaders = exports.AcknowledgeThirdPartyJobXAmzTargetEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AcknowledgeThirdPartyJobXAmzTargetEnum;
(function (AcknowledgeThirdPartyJobXAmzTargetEnum) {
    AcknowledgeThirdPartyJobXAmzTargetEnum["CodePipeline20150709AcknowledgeThirdPartyJob"] = "CodePipeline_20150709.AcknowledgeThirdPartyJob";
})(AcknowledgeThirdPartyJobXAmzTargetEnum = exports.AcknowledgeThirdPartyJobXAmzTargetEnum || (exports.AcknowledgeThirdPartyJobXAmzTargetEnum = {}));
var AcknowledgeThirdPartyJobHeaders = /** @class */ (function (_super) {
    __extends(AcknowledgeThirdPartyJobHeaders, _super);
    function AcknowledgeThirdPartyJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobHeaders.prototype, "xAmzTarget", void 0);
    return AcknowledgeThirdPartyJobHeaders;
}(utils_1.SpeakeasyBase));
exports.AcknowledgeThirdPartyJobHeaders = AcknowledgeThirdPartyJobHeaders;
var AcknowledgeThirdPartyJobRequest = /** @class */ (function (_super) {
    __extends(AcknowledgeThirdPartyJobRequest, _super);
    function AcknowledgeThirdPartyJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcknowledgeThirdPartyJobHeaders)
    ], AcknowledgeThirdPartyJobRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AcknowledgeThirdPartyJobInput)
    ], AcknowledgeThirdPartyJobRequest.prototype, "request", void 0);
    return AcknowledgeThirdPartyJobRequest;
}(utils_1.SpeakeasyBase));
exports.AcknowledgeThirdPartyJobRequest = AcknowledgeThirdPartyJobRequest;
var AcknowledgeThirdPartyJobResponse = /** @class */ (function (_super) {
    __extends(AcknowledgeThirdPartyJobResponse, _super);
    function AcknowledgeThirdPartyJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AcknowledgeThirdPartyJobOutput)
    ], AcknowledgeThirdPartyJobResponse.prototype, "acknowledgeThirdPartyJobOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcknowledgeThirdPartyJobResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcknowledgeThirdPartyJobResponse.prototype, "invalidClientTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcknowledgeThirdPartyJobResponse.prototype, "invalidNonceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcknowledgeThirdPartyJobResponse.prototype, "jobNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AcknowledgeThirdPartyJobResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcknowledgeThirdPartyJobResponse.prototype, "validationException", void 0);
    return AcknowledgeThirdPartyJobResponse;
}(utils_1.SpeakeasyBase));
exports.AcknowledgeThirdPartyJobResponse = AcknowledgeThirdPartyJobResponse;
