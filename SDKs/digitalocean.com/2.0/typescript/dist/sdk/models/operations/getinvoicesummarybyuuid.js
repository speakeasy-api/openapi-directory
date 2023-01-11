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
exports.GetInvoiceSummaryByUuidResponse = exports.GetInvoiceSummaryByUuidRequest = exports.GetInvoiceSummaryByUuid401ApplicationJson = exports.GetInvoiceSummaryByUuid200ApplicationJson = exports.GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress = exports.GetInvoiceSummaryByUuid200ApplicationJsonTaxes = exports.GetInvoiceSummaryByUuid200ApplicationJsonProductCharges = exports.GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems = exports.GetInvoiceSummaryByUuid200ApplicationJsonOverages = exports.GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments = exports.GetInvoiceSummaryByUuidPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetInvoiceSummaryByUuidPathParams = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuidPathParams, _super);
    function GetInvoiceSummaryByUuidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=invoice_uuid" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuidPathParams.prototype, "invoiceUuid", void 0);
    return GetInvoiceSummaryByUuidPathParams;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuidPathParams = GetInvoiceSummaryByUuidPathParams;
// GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments
/**
 * A summary of the credits and adjustments contributing to the invoice.
**/
var GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments, _super);
    function GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments.prototype, "name", void 0);
    return GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments = GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments;
// GetInvoiceSummaryByUuid200ApplicationJsonOverages
/**
 * A summary of the overages contributing to the invoice.
**/
var GetInvoiceSummaryByUuid200ApplicationJsonOverages = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuid200ApplicationJsonOverages, _super);
    function GetInvoiceSummaryByUuid200ApplicationJsonOverages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonOverages.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonOverages.prototype, "name", void 0);
    return GetInvoiceSummaryByUuid200ApplicationJsonOverages;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuid200ApplicationJsonOverages = GetInvoiceSummaryByUuid200ApplicationJsonOverages;
var GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems, _super);
    function GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems.prototype, "name", void 0);
    return GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems = GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems;
// GetInvoiceSummaryByUuid200ApplicationJsonProductCharges
/**
 * A summary of the product usage charges contributing to the invoice.  This will include an amount, and grouped aggregates by resource type  under the `items` key.
**/
var GetInvoiceSummaryByUuid200ApplicationJsonProductCharges = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuid200ApplicationJsonProductCharges, _super);
    function GetInvoiceSummaryByUuid200ApplicationJsonProductCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonProductCharges.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: GetInvoiceSummaryByUuid200ApplicationJsonProductChargesItems }),
        __metadata("design:type", Array)
    ], GetInvoiceSummaryByUuid200ApplicationJsonProductCharges.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonProductCharges.prototype, "name", void 0);
    return GetInvoiceSummaryByUuid200ApplicationJsonProductCharges;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuid200ApplicationJsonProductCharges = GetInvoiceSummaryByUuid200ApplicationJsonProductCharges;
// GetInvoiceSummaryByUuid200ApplicationJsonTaxes
/**
 * A summary of the taxes contributing to the invoice.
**/
var GetInvoiceSummaryByUuid200ApplicationJsonTaxes = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuid200ApplicationJsonTaxes, _super);
    function GetInvoiceSummaryByUuid200ApplicationJsonTaxes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonTaxes.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonTaxes.prototype, "name", void 0);
    return GetInvoiceSummaryByUuid200ApplicationJsonTaxes;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuid200ApplicationJsonTaxes = GetInvoiceSummaryByUuid200ApplicationJsonTaxes;
// GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress
/**
 * The billing address of the customer being invoiced.
**/
var GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress, _super);
    function GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line1" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress.prototype, "addressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address_line2" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress.prototype, "addressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_iso2_code" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress.prototype, "countryIso2Code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress.prototype, "updatedAt", void 0);
    return GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress = GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress;
var GetInvoiceSummaryByUuid200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuid200ApplicationJson, _super);
    function GetInvoiceSummaryByUuid200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_period" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "billingPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=credits_and_adjustments" }),
        __metadata("design:type", GetInvoiceSummaryByUuid200ApplicationJsonCreditsAndAdjustments)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "creditsAndAdjustments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_uuid" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "invoiceUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overages" }),
        __metadata("design:type", GetInvoiceSummaryByUuid200ApplicationJsonOverages)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "overages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product_charges" }),
        __metadata("design:type", GetInvoiceSummaryByUuid200ApplicationJsonProductCharges)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "productCharges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxes" }),
        __metadata("design:type", GetInvoiceSummaryByUuid200ApplicationJsonTaxes)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "taxes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_billing_address" }),
        __metadata("design:type", GetInvoiceSummaryByUuid200ApplicationJsonUserBillingAddress)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "userBillingAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_company" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "userCompany", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid200ApplicationJson.prototype, "userName", void 0);
    return GetInvoiceSummaryByUuid200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuid200ApplicationJson = GetInvoiceSummaryByUuid200ApplicationJson;
var GetInvoiceSummaryByUuid401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuid401ApplicationJson, _super);
    function GetInvoiceSummaryByUuid401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuid401ApplicationJson.prototype, "requestId", void 0);
    return GetInvoiceSummaryByUuid401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuid401ApplicationJson = GetInvoiceSummaryByUuid401ApplicationJson;
var GetInvoiceSummaryByUuidRequest = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuidRequest, _super);
    function GetInvoiceSummaryByUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceSummaryByUuidPathParams)
    ], GetInvoiceSummaryByUuidRequest.prototype, "pathParams", void 0);
    return GetInvoiceSummaryByUuidRequest;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuidRequest = GetInvoiceSummaryByUuidRequest;
var GetInvoiceSummaryByUuidResponse = /** @class */ (function (_super) {
    __extends(GetInvoiceSummaryByUuidResponse, _super);
    function GetInvoiceSummaryByUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetInvoiceSummaryByUuidResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetInvoiceSummaryByUuidResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetInvoiceSummaryByUuidResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceSummaryByUuid200ApplicationJson)
    ], GetInvoiceSummaryByUuidResponse.prototype, "getInvoiceSummaryByUuid200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetInvoiceSummaryByUuid401ApplicationJson)
    ], GetInvoiceSummaryByUuidResponse.prototype, "getInvoiceSummaryByUuid401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetInvoiceSummaryByUuidResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetInvoiceSummaryByUuidResponse;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceSummaryByUuidResponse = GetInvoiceSummaryByUuidResponse;
