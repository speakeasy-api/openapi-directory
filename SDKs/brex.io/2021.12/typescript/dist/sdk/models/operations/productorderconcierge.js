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
exports.ProductOrderConciergeResponse = exports.ProductOrderConciergeRequest = exports.ProductOrderConciergeSecurity = exports.ProductOrderConciergeRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ProductOrderConciergeRequestBody = /** @class */ (function (_super) {
    __extends(ProductOrderConciergeRequestBody, _super);
    function ProductOrderConciergeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=companyName;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=contactEmail;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "contactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=contactPhone;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "contactPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=costConfirmation;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "costConfirmation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=country;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=financialData;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "financialData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=historicInformation;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "historicInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=informationRequirements;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "informationRequirements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=locationInvestigation;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "locationInvestigation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=priority;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=registerData;" }),
        __metadata("design:type", Boolean)
    ], ProductOrderConciergeRequestBody.prototype, "registerData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=registerNumber;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "registerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=subjectId;" }),
        __metadata("design:type", String)
    ], ProductOrderConciergeRequestBody.prototype, "subjectId", void 0);
    return ProductOrderConciergeRequestBody;
}(utils_1.SpeakeasyBase));
exports.ProductOrderConciergeRequestBody = ProductOrderConciergeRequestBody;
var ProductOrderConciergeSecurity = /** @class */ (function (_super) {
    __extends(ProductOrderConciergeSecurity, _super);
    function ProductOrderConciergeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], ProductOrderConciergeSecurity.prototype, "userKey", void 0);
    return ProductOrderConciergeSecurity;
}(utils_1.SpeakeasyBase));
exports.ProductOrderConciergeSecurity = ProductOrderConciergeSecurity;
var ProductOrderConciergeRequest = /** @class */ (function (_super) {
    __extends(ProductOrderConciergeRequest, _super);
    function ProductOrderConciergeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ProductOrderConciergeRequestBody)
    ], ProductOrderConciergeRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProductOrderConciergeSecurity)
    ], ProductOrderConciergeRequest.prototype, "security", void 0);
    return ProductOrderConciergeRequest;
}(utils_1.SpeakeasyBase));
exports.ProductOrderConciergeRequest = ProductOrderConciergeRequest;
var ProductOrderConciergeResponse = /** @class */ (function (_super) {
    __extends(ProductOrderConciergeResponse, _super);
    function ProductOrderConciergeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProductOrderConciergeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ProductOrderConciergeResponse.prototype, "productOrderConcierge200ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ProductOrderConciergeResponse.prototype, "productOrderConciergeDefaultApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProductOrderConciergeResponse.prototype, "statusCode", void 0);
    return ProductOrderConciergeResponse;
}(utils_1.SpeakeasyBase));
exports.ProductOrderConciergeResponse = ProductOrderConciergeResponse;
