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
exports.PutReturnsResponse = exports.PutReturnsRequest = exports.PutReturnsRmaResponseV2 = exports.PutReturnsRmaResponseV2ConsigneeV2 = exports.PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 = exports.PutReturnsRmaResponseV2Items = exports.PutReturnsSecurity = exports.PutReturnsRmaRequestV2 = exports.PutReturnsRmaRequestV2Items = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutReturnsRmaRequestV2Items = /** @class */ (function (_super) {
    __extends(PutReturnsRmaRequestV2Items, _super);
    function PutReturnsRmaRequestV2Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityExpected" }),
        __metadata("design:type", Number)
    ], PutReturnsRmaRequestV2Items.prototype, "quantityExpected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], PutReturnsRmaRequestV2Items.prototype, "sku", void 0);
    return PutReturnsRmaRequestV2Items;
}(utils_1.SpeakeasyBase));
exports.PutReturnsRmaRequestV2Items = PutReturnsRmaRequestV2Items;
var PutReturnsRmaRequestV2 = /** @class */ (function (_super) {
    __extends(PutReturnsRmaRequestV2, _super);
    function PutReturnsRmaRequestV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: PutReturnsRmaRequestV2Items }),
        __metadata("design:type", Array)
    ], PutReturnsRmaRequestV2.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], PutReturnsRmaRequestV2.prototype, "merchantOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipient" }),
        __metadata("design:type", shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient)
    ], PutReturnsRmaRequestV2.prototype, "recipient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rmaNumber" }),
        __metadata("design:type", String)
    ], PutReturnsRmaRequestV2.prototype, "rmaNumber", void 0);
    return PutReturnsRmaRequestV2;
}(utils_1.SpeakeasyBase));
exports.PutReturnsRmaRequestV2 = PutReturnsRmaRequestV2;
var PutReturnsSecurity = /** @class */ (function (_super) {
    __extends(PutReturnsSecurity, _super);
    function PutReturnsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], PutReturnsSecurity.prototype, "fdcAuth", void 0);
    return PutReturnsSecurity;
}(utils_1.SpeakeasyBase));
exports.PutReturnsSecurity = PutReturnsSecurity;
var PutReturnsRmaResponseV2Items = /** @class */ (function (_super) {
    __extends(PutReturnsRmaResponseV2Items, _super);
    function PutReturnsRmaResponseV2Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityExpected" }),
        __metadata("design:type", Number)
    ], PutReturnsRmaResponseV2Items.prototype, "quantityExpected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2Items.prototype, "sku", void 0);
    return PutReturnsRmaResponseV2Items;
}(utils_1.SpeakeasyBase));
exports.PutReturnsRmaResponseV2Items = PutReturnsRmaResponseV2Items;
var PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 = /** @class */ (function (_super) {
    __extends(PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2, _super);
    function PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iso2" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2.prototype, "iso2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2.prototype, "name", void 0);
    return PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2;
}(utils_1.SpeakeasyBase));
exports.PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 = PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2;
var PutReturnsRmaResponseV2ConsigneeV2 = /** @class */ (function (_super) {
    __extends(PutReturnsRmaResponseV2ConsigneeV2, _super);
    function PutReturnsRmaResponseV2ConsigneeV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "address1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "address2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressLocality" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "addressLocality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressRegion" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "addressRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iso" }),
        __metadata("design:type", PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "iso", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], PutReturnsRmaResponseV2ConsigneeV2.prototype, "updatedBy", void 0);
    return PutReturnsRmaResponseV2ConsigneeV2;
}(utils_1.SpeakeasyBase));
exports.PutReturnsRmaResponseV2ConsigneeV2 = PutReturnsRmaResponseV2ConsigneeV2;
var PutReturnsRmaResponseV2 = /** @class */ (function (_super) {
    __extends(PutReturnsRmaResponseV2, _super);
    function PutReturnsRmaResponseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: PutReturnsRmaResponseV2Items }),
        __metadata("design:type", Array)
    ], PutReturnsRmaResponseV2.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2.prototype, "merchantOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipient" }),
        __metadata("design:type", PutReturnsRmaResponseV2ConsigneeV2)
    ], PutReturnsRmaResponseV2.prototype, "recipient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rmaNumber" }),
        __metadata("design:type", String)
    ], PutReturnsRmaResponseV2.prototype, "rmaNumber", void 0);
    return PutReturnsRmaResponseV2;
}(utils_1.SpeakeasyBase));
exports.PutReturnsRmaResponseV2 = PutReturnsRmaResponseV2;
var PutReturnsRequest = /** @class */ (function (_super) {
    __extends(PutReturnsRequest, _super);
    function PutReturnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutReturnsRmaRequestV2)
    ], PutReturnsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutReturnsSecurity)
    ], PutReturnsRequest.prototype, "security", void 0);
    return PutReturnsRequest;
}(utils_1.SpeakeasyBase));
exports.PutReturnsRequest = PutReturnsRequest;
var PutReturnsResponse = /** @class */ (function (_super) {
    __extends(PutReturnsResponse, _super);
    function PutReturnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutReturnsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutReturnsRmaResponseV2)
    ], PutReturnsResponse.prototype, "rmaResponseV2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutReturnsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OneordersGetResponses404ContentApplication1jsonSchema)
    ], PutReturnsResponse.prototype, "oneordersGetResponses404ContentApplication1jsonSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OnereturnsPutResponses201ContentApplication1jsonSchema)
    ], PutReturnsResponse.prototype, "onereturnsPutResponses201ContentApplication1jsonSchema", void 0);
    return PutReturnsResponse;
}(utils_1.SpeakeasyBase));
exports.PutReturnsResponse = PutReturnsResponse;
