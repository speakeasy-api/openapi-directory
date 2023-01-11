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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFindingsResponse = exports.UpdateFindingsRequest = exports.UpdateFindingsRequestBody = exports.UpdateFindingsRequestBodyStatusEnum = exports.UpdateFindingsHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateFindingsHeaders = /** @class */ (function (_super) {
    __extends(UpdateFindingsHeaders, _super);
    function UpdateFindingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateFindingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateFindingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateFindingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateFindingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateFindingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateFindingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateFindingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateFindingsHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateFindingsHeaders = UpdateFindingsHeaders;
var UpdateFindingsRequestBodyStatusEnum;
(function (UpdateFindingsRequestBodyStatusEnum) {
    UpdateFindingsRequestBodyStatusEnum["Active"] = "ACTIVE";
    UpdateFindingsRequestBodyStatusEnum["Archived"] = "ARCHIVED";
})(UpdateFindingsRequestBodyStatusEnum = exports.UpdateFindingsRequestBodyStatusEnum || (exports.UpdateFindingsRequestBodyStatusEnum = {}));
var UpdateFindingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateFindingsRequestBody, _super);
    function UpdateFindingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analyzerArn" }),
        __metadata("design:type", String)
    ], UpdateFindingsRequestBody.prototype, "analyzerArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateFindingsRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], UpdateFindingsRequestBody.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceArn" }),
        __metadata("design:type", String)
    ], UpdateFindingsRequestBody.prototype, "resourceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateFindingsRequestBody.prototype, "status", void 0);
    return UpdateFindingsRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateFindingsRequestBody = UpdateFindingsRequestBody;
var UpdateFindingsRequest = /** @class */ (function (_super) {
    __extends(UpdateFindingsRequest, _super);
    function UpdateFindingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateFindingsHeaders)
    ], UpdateFindingsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateFindingsRequestBody)
    ], UpdateFindingsRequest.prototype, "request", void 0);
    return UpdateFindingsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateFindingsRequest = UpdateFindingsRequest;
var UpdateFindingsResponse = /** @class */ (function (_super) {
    __extends(UpdateFindingsResponse, _super);
    function UpdateFindingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateFindingsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateFindingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateFindingsResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateFindingsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateFindingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateFindingsResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateFindingsResponse.prototype, "validationException", void 0);
    return UpdateFindingsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateFindingsResponse = UpdateFindingsResponse;
