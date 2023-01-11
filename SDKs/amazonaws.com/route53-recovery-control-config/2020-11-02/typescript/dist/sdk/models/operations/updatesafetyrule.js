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
exports.UpdateSafetyRuleResponse = exports.UpdateSafetyRuleRequest = exports.UpdateSafetyRuleRequestBody = exports.UpdateSafetyRuleRequestBodyGatingRuleUpdate = exports.UpdateSafetyRuleRequestBodyAssertionRuleUpdate = exports.UpdateSafetyRuleHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateSafetyRuleHeaders = /** @class */ (function (_super) {
    __extends(UpdateSafetyRuleHeaders, _super);
    function UpdateSafetyRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSafetyRuleHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateSafetyRuleHeaders = UpdateSafetyRuleHeaders;
// UpdateSafetyRuleRequestBodyAssertionRuleUpdate
/**
 * An update to an assertion rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
var UpdateSafetyRuleRequestBodyAssertionRuleUpdate = /** @class */ (function (_super) {
    __extends(UpdateSafetyRuleRequestBodyAssertionRuleUpdate, _super);
    function UpdateSafetyRuleRequestBodyAssertionRuleUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleRequestBodyAssertionRuleUpdate.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SafetyRuleArn" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleRequestBodyAssertionRuleUpdate.prototype, "safetyRuleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=WaitPeriodMs" }),
        __metadata("design:type", Number)
    ], UpdateSafetyRuleRequestBodyAssertionRuleUpdate.prototype, "waitPeriodMs", void 0);
    return UpdateSafetyRuleRequestBodyAssertionRuleUpdate;
}(utils_1.SpeakeasyBase));
exports.UpdateSafetyRuleRequestBodyAssertionRuleUpdate = UpdateSafetyRuleRequestBodyAssertionRuleUpdate;
// UpdateSafetyRuleRequestBodyGatingRuleUpdate
/**
 * Update to a gating rule. You can update the name or the evaluation period (wait period). If you don't specify one of the items to update, the item is unchanged.
**/
var UpdateSafetyRuleRequestBodyGatingRuleUpdate = /** @class */ (function (_super) {
    __extends(UpdateSafetyRuleRequestBodyGatingRuleUpdate, _super);
    function UpdateSafetyRuleRequestBodyGatingRuleUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleRequestBodyGatingRuleUpdate.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SafetyRuleArn" }),
        __metadata("design:type", String)
    ], UpdateSafetyRuleRequestBodyGatingRuleUpdate.prototype, "safetyRuleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=WaitPeriodMs" }),
        __metadata("design:type", Number)
    ], UpdateSafetyRuleRequestBodyGatingRuleUpdate.prototype, "waitPeriodMs", void 0);
    return UpdateSafetyRuleRequestBodyGatingRuleUpdate;
}(utils_1.SpeakeasyBase));
exports.UpdateSafetyRuleRequestBodyGatingRuleUpdate = UpdateSafetyRuleRequestBodyGatingRuleUpdate;
var UpdateSafetyRuleRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSafetyRuleRequestBody, _super);
    function UpdateSafetyRuleRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AssertionRuleUpdate" }),
        __metadata("design:type", UpdateSafetyRuleRequestBodyAssertionRuleUpdate)
    ], UpdateSafetyRuleRequestBody.prototype, "assertionRuleUpdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GatingRuleUpdate" }),
        __metadata("design:type", UpdateSafetyRuleRequestBodyGatingRuleUpdate)
    ], UpdateSafetyRuleRequestBody.prototype, "gatingRuleUpdate", void 0);
    return UpdateSafetyRuleRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateSafetyRuleRequestBody = UpdateSafetyRuleRequestBody;
var UpdateSafetyRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateSafetyRuleRequest, _super);
    function UpdateSafetyRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSafetyRuleHeaders)
    ], UpdateSafetyRuleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSafetyRuleRequestBody)
    ], UpdateSafetyRuleRequest.prototype, "request", void 0);
    return UpdateSafetyRuleRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSafetyRuleRequest = UpdateSafetyRuleRequest;
var UpdateSafetyRuleResponse = /** @class */ (function (_super) {
    __extends(UpdateSafetyRuleResponse, _super);
    function UpdateSafetyRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSafetyRuleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSafetyRuleResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSafetyRuleResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSafetyRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateSafetyRuleResponse)
    ], UpdateSafetyRuleResponse.prototype, "updateSafetyRuleResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSafetyRuleResponse.prototype, "validationException", void 0);
    return UpdateSafetyRuleResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSafetyRuleResponse = UpdateSafetyRuleResponse;
