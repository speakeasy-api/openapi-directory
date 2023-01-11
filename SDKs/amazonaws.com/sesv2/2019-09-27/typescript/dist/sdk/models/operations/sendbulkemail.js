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
exports.SendBulkEmailResponse = exports.SendBulkEmailRequest = exports.SendBulkEmailRequestBody = exports.SendBulkEmailRequestBodyDefaultContent = exports.SendBulkEmailHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SendBulkEmailHeaders = /** @class */ (function (_super) {
    __extends(SendBulkEmailHeaders, _super);
    function SendBulkEmailHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], SendBulkEmailHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], SendBulkEmailHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], SendBulkEmailHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], SendBulkEmailHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], SendBulkEmailHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], SendBulkEmailHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], SendBulkEmailHeaders.prototype, "xAmzSignedHeaders", void 0);
    return SendBulkEmailHeaders;
}(utils_1.SpeakeasyBase));
exports.SendBulkEmailHeaders = SendBulkEmailHeaders;
// SendBulkEmailRequestBodyDefaultContent
/**
 * An object that contains the body of the message. You can specify a template message.
**/
var SendBulkEmailRequestBodyDefaultContent = /** @class */ (function (_super) {
    __extends(SendBulkEmailRequestBodyDefaultContent, _super);
    function SendBulkEmailRequestBodyDefaultContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Template" }),
        __metadata("design:type", shared.Template)
    ], SendBulkEmailRequestBodyDefaultContent.prototype, "template", void 0);
    return SendBulkEmailRequestBodyDefaultContent;
}(utils_1.SpeakeasyBase));
exports.SendBulkEmailRequestBodyDefaultContent = SendBulkEmailRequestBodyDefaultContent;
var SendBulkEmailRequestBody = /** @class */ (function (_super) {
    __extends(SendBulkEmailRequestBody, _super);
    function SendBulkEmailRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BulkEmailEntries", elemType: shared.BulkEmailEntry }),
        __metadata("design:type", Array)
    ], SendBulkEmailRequestBody.prototype, "bulkEmailEntries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], SendBulkEmailRequestBody.prototype, "configurationSetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultContent" }),
        __metadata("design:type", SendBulkEmailRequestBodyDefaultContent)
    ], SendBulkEmailRequestBody.prototype, "defaultContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultEmailTags", elemType: shared.MessageTag }),
        __metadata("design:type", Array)
    ], SendBulkEmailRequestBody.prototype, "defaultEmailTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FeedbackForwardingEmailAddress" }),
        __metadata("design:type", String)
    ], SendBulkEmailRequestBody.prototype, "feedbackForwardingEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FeedbackForwardingEmailAddressIdentityArn" }),
        __metadata("design:type", String)
    ], SendBulkEmailRequestBody.prototype, "feedbackForwardingEmailAddressIdentityArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FromEmailAddress" }),
        __metadata("design:type", String)
    ], SendBulkEmailRequestBody.prototype, "fromEmailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FromEmailAddressIdentityArn" }),
        __metadata("design:type", String)
    ], SendBulkEmailRequestBody.prototype, "fromEmailAddressIdentityArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReplyToAddresses" }),
        __metadata("design:type", Array)
    ], SendBulkEmailRequestBody.prototype, "replyToAddresses", void 0);
    return SendBulkEmailRequestBody;
}(utils_1.SpeakeasyBase));
exports.SendBulkEmailRequestBody = SendBulkEmailRequestBody;
var SendBulkEmailRequest = /** @class */ (function (_super) {
    __extends(SendBulkEmailRequest, _super);
    function SendBulkEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SendBulkEmailHeaders)
    ], SendBulkEmailRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SendBulkEmailRequestBody)
    ], SendBulkEmailRequest.prototype, "request", void 0);
    return SendBulkEmailRequest;
}(utils_1.SpeakeasyBase));
exports.SendBulkEmailRequest = SendBulkEmailRequest;
var SendBulkEmailResponse = /** @class */ (function (_super) {
    __extends(SendBulkEmailResponse, _super);
    function SendBulkEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendBulkEmailResponse.prototype, "accountSuspendedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendBulkEmailResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SendBulkEmailResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendBulkEmailResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendBulkEmailResponse.prototype, "mailFromDomainNotVerifiedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendBulkEmailResponse.prototype, "messageRejected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendBulkEmailResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SendBulkEmailResponse)
    ], SendBulkEmailResponse.prototype, "sendBulkEmailResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendBulkEmailResponse.prototype, "sendingPausedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SendBulkEmailResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SendBulkEmailResponse.prototype, "tooManyRequestsException", void 0);
    return SendBulkEmailResponse;
}(utils_1.SpeakeasyBase));
exports.SendBulkEmailResponse = SendBulkEmailResponse;
