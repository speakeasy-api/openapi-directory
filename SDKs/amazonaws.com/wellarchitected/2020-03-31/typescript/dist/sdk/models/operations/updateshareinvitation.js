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
exports.UpdateShareInvitationResponse = exports.UpdateShareInvitationRequest = exports.UpdateShareInvitationRequestBody = exports.UpdateShareInvitationRequestBodyShareInvitationActionEnum = exports.UpdateShareInvitationHeaders = exports.UpdateShareInvitationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateShareInvitationPathParams = /** @class */ (function (_super) {
    __extends(UpdateShareInvitationPathParams, _super);
    function UpdateShareInvitationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ShareInvitationId" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationPathParams.prototype, "shareInvitationId", void 0);
    return UpdateShareInvitationPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateShareInvitationPathParams = UpdateShareInvitationPathParams;
var UpdateShareInvitationHeaders = /** @class */ (function (_super) {
    __extends(UpdateShareInvitationHeaders, _super);
    function UpdateShareInvitationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateShareInvitationHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateShareInvitationHeaders = UpdateShareInvitationHeaders;
var UpdateShareInvitationRequestBodyShareInvitationActionEnum;
(function (UpdateShareInvitationRequestBodyShareInvitationActionEnum) {
    UpdateShareInvitationRequestBodyShareInvitationActionEnum["Accept"] = "ACCEPT";
    UpdateShareInvitationRequestBodyShareInvitationActionEnum["Reject"] = "REJECT";
})(UpdateShareInvitationRequestBodyShareInvitationActionEnum = exports.UpdateShareInvitationRequestBodyShareInvitationActionEnum || (exports.UpdateShareInvitationRequestBodyShareInvitationActionEnum = {}));
var UpdateShareInvitationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateShareInvitationRequestBody, _super);
    function UpdateShareInvitationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ShareInvitationAction" }),
        __metadata("design:type", String)
    ], UpdateShareInvitationRequestBody.prototype, "shareInvitationAction", void 0);
    return UpdateShareInvitationRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateShareInvitationRequestBody = UpdateShareInvitationRequestBody;
var UpdateShareInvitationRequest = /** @class */ (function (_super) {
    __extends(UpdateShareInvitationRequest, _super);
    function UpdateShareInvitationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateShareInvitationPathParams)
    ], UpdateShareInvitationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateShareInvitationHeaders)
    ], UpdateShareInvitationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateShareInvitationRequestBody)
    ], UpdateShareInvitationRequest.prototype, "request", void 0);
    return UpdateShareInvitationRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateShareInvitationRequest = UpdateShareInvitationRequest;
var UpdateShareInvitationResponse = /** @class */ (function (_super) {
    __extends(UpdateShareInvitationResponse, _super);
    function UpdateShareInvitationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateShareInvitationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateShareInvitationResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateShareInvitationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateShareInvitationResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateShareInvitationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateShareInvitationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateShareInvitationResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateShareInvitationOutput)
    ], UpdateShareInvitationResponse.prototype, "updateShareInvitationOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateShareInvitationResponse.prototype, "validationException", void 0);
    return UpdateShareInvitationResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateShareInvitationResponse = UpdateShareInvitationResponse;
