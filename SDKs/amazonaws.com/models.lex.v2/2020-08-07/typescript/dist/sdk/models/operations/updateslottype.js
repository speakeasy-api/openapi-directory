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
exports.UpdateSlotTypeResponse = exports.UpdateSlotTypeRequest = exports.UpdateSlotTypeRequestBody = exports.UpdateSlotTypeRequestBodyValueSelectionSetting = exports.UpdateSlotTypeHeaders = exports.UpdateSlotTypePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateSlotTypePathParams = /** @class */ (function (_super) {
    __extends(UpdateSlotTypePathParams, _super);
    function UpdateSlotTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], UpdateSlotTypePathParams.prototype, "botId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botVersion" }),
        __metadata("design:type", String)
    ], UpdateSlotTypePathParams.prototype, "botVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=localeId" }),
        __metadata("design:type", String)
    ], UpdateSlotTypePathParams.prototype, "localeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=slotTypeId" }),
        __metadata("design:type", String)
    ], UpdateSlotTypePathParams.prototype, "slotTypeId", void 0);
    return UpdateSlotTypePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSlotTypePathParams = UpdateSlotTypePathParams;
var UpdateSlotTypeHeaders = /** @class */ (function (_super) {
    __extends(UpdateSlotTypeHeaders, _super);
    function UpdateSlotTypeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSlotTypeHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateSlotTypeHeaders = UpdateSlotTypeHeaders;
// UpdateSlotTypeRequestBodyValueSelectionSetting
/**
 * Contains settings used by Amazon Lex to select a slot value.
**/
var UpdateSlotTypeRequestBodyValueSelectionSetting = /** @class */ (function (_super) {
    __extends(UpdateSlotTypeRequestBodyValueSelectionSetting, _super);
    function UpdateSlotTypeRequestBodyValueSelectionSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regexFilter" }),
        __metadata("design:type", shared.SlotValueRegexFilter)
    ], UpdateSlotTypeRequestBodyValueSelectionSetting.prototype, "regexFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolutionStrategy" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeRequestBodyValueSelectionSetting.prototype, "resolutionStrategy", void 0);
    return UpdateSlotTypeRequestBodyValueSelectionSetting;
}(utils_1.SpeakeasyBase));
exports.UpdateSlotTypeRequestBodyValueSelectionSetting = UpdateSlotTypeRequestBodyValueSelectionSetting;
var UpdateSlotTypeRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSlotTypeRequestBody, _super);
    function UpdateSlotTypeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentSlotTypeSignature" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeRequestBody.prototype, "parentSlotTypeSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slotTypeName" }),
        __metadata("design:type", String)
    ], UpdateSlotTypeRequestBody.prototype, "slotTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slotTypeValues", elemType: shared.SlotTypeValue }),
        __metadata("design:type", Array)
    ], UpdateSlotTypeRequestBody.prototype, "slotTypeValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valueSelectionSetting" }),
        __metadata("design:type", UpdateSlotTypeRequestBodyValueSelectionSetting)
    ], UpdateSlotTypeRequestBody.prototype, "valueSelectionSetting", void 0);
    return UpdateSlotTypeRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateSlotTypeRequestBody = UpdateSlotTypeRequestBody;
var UpdateSlotTypeRequest = /** @class */ (function (_super) {
    __extends(UpdateSlotTypeRequest, _super);
    function UpdateSlotTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSlotTypePathParams)
    ], UpdateSlotTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSlotTypeHeaders)
    ], UpdateSlotTypeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSlotTypeRequestBody)
    ], UpdateSlotTypeRequest.prototype, "request", void 0);
    return UpdateSlotTypeRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSlotTypeRequest = UpdateSlotTypeRequest;
var UpdateSlotTypeResponse = /** @class */ (function (_super) {
    __extends(UpdateSlotTypeResponse, _super);
    function UpdateSlotTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSlotTypeResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSlotTypeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSlotTypeResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSlotTypeResponse.prototype, "preconditionFailedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSlotTypeResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSlotTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSlotTypeResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateSlotTypeResponse)
    ], UpdateSlotTypeResponse.prototype, "updateSlotTypeResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSlotTypeResponse.prototype, "validationException", void 0);
    return UpdateSlotTypeResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSlotTypeResponse = UpdateSlotTypeResponse;
