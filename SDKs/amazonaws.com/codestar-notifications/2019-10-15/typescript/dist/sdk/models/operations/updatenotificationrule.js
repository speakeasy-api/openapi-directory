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
exports.UpdateNotificationRuleResponse = exports.UpdateNotificationRuleRequest = exports.UpdateNotificationRuleRequestBody = exports.UpdateNotificationRuleRequestBodyStatusEnum = exports.UpdateNotificationRuleRequestBodyDetailTypeEnum = exports.UpdateNotificationRuleHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateNotificationRuleHeaders = /** @class */ (function (_super) {
    __extends(UpdateNotificationRuleHeaders, _super);
    function UpdateNotificationRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateNotificationRuleHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateNotificationRuleHeaders = UpdateNotificationRuleHeaders;
var UpdateNotificationRuleRequestBodyDetailTypeEnum;
(function (UpdateNotificationRuleRequestBodyDetailTypeEnum) {
    UpdateNotificationRuleRequestBodyDetailTypeEnum["Basic"] = "BASIC";
    UpdateNotificationRuleRequestBodyDetailTypeEnum["Full"] = "FULL";
})(UpdateNotificationRuleRequestBodyDetailTypeEnum = exports.UpdateNotificationRuleRequestBodyDetailTypeEnum || (exports.UpdateNotificationRuleRequestBodyDetailTypeEnum = {}));
var UpdateNotificationRuleRequestBodyStatusEnum;
(function (UpdateNotificationRuleRequestBodyStatusEnum) {
    UpdateNotificationRuleRequestBodyStatusEnum["Enabled"] = "ENABLED";
    UpdateNotificationRuleRequestBodyStatusEnum["Disabled"] = "DISABLED";
})(UpdateNotificationRuleRequestBodyStatusEnum = exports.UpdateNotificationRuleRequestBodyStatusEnum || (exports.UpdateNotificationRuleRequestBodyStatusEnum = {}));
var UpdateNotificationRuleRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNotificationRuleRequestBody, _super);
    function UpdateNotificationRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleRequestBody.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DetailType" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleRequestBody.prototype, "detailType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EventTypeIds" }),
        __metadata("design:type", Array)
    ], UpdateNotificationRuleRequestBody.prototype, "eventTypeIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], UpdateNotificationRuleRequestBody.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Targets", elemType: shared.Target }),
        __metadata("design:type", Array)
    ], UpdateNotificationRuleRequestBody.prototype, "targets", void 0);
    return UpdateNotificationRuleRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNotificationRuleRequestBody = UpdateNotificationRuleRequestBody;
var UpdateNotificationRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateNotificationRuleRequest, _super);
    function UpdateNotificationRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNotificationRuleHeaders)
    ], UpdateNotificationRuleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNotificationRuleRequestBody)
    ], UpdateNotificationRuleRequest.prototype, "request", void 0);
    return UpdateNotificationRuleRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNotificationRuleRequest = UpdateNotificationRuleRequest;
var UpdateNotificationRuleResponse = /** @class */ (function (_super) {
    __extends(UpdateNotificationRuleResponse, _super);
    function UpdateNotificationRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNotificationRuleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNotificationRuleResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNotificationRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNotificationRuleResponse.prototype, "updateNotificationRuleResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNotificationRuleResponse.prototype, "validationException", void 0);
    return UpdateNotificationRuleResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNotificationRuleResponse = UpdateNotificationRuleResponse;
