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
exports.GetOrdersResponse = exports.GetOrdersRequest = exports.GetOrders200ApplicationJsonOrderResponseV2 = exports.GetOrders200ApplicationJsonOrderResponseV2WarehouseV2 = exports.GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers = exports.GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 = exports.GetOrders200ApplicationJsonOrderResponseV2ParentOrder = exports.GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2 = exports.GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 = exports.GetOrders200ApplicationJsonOrderResponseV2MerchantV2 = exports.GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 = exports.GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData = exports.GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails = exports.GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails = exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2 = exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 = exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State = exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage = exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy = exports.GetOrdersErrorStandardV2 = exports.GetOrdersSecurity = exports.GetOrdersQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetOrdersQueryParams = /** @class */ (function (_super) {
    __extends(GetOrdersQueryParams, _super);
    function GetOrdersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromDate" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "fromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=hydrate" }),
        __metadata("design:type", Array)
    ], GetOrdersQueryParams.prototype, "hydrate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetOrdersQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=merchantIds" }),
        __metadata("design:type", Array)
    ], GetOrdersQueryParams.prototype, "merchantIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetOrdersQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=toDate" }),
        __metadata("design:type", String)
    ], GetOrdersQueryParams.prototype, "toDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=warehouseIds" }),
        __metadata("design:type", Array)
    ], GetOrdersQueryParams.prototype, "warehouseIds", void 0);
    return GetOrdersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrdersQueryParams = GetOrdersQueryParams;
var GetOrdersSecurity = /** @class */ (function (_super) {
    __extends(GetOrdersSecurity, _super);
    function GetOrdersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], GetOrdersSecurity.prototype, "fdcAuth", void 0);
    return GetOrdersSecurity;
}(utils_1.SpeakeasyBase));
exports.GetOrdersSecurity = GetOrdersSecurity;
var GetOrdersErrorStandardV2 = /** @class */ (function (_super) {
    __extends(GetOrdersErrorStandardV2, _super);
    function GetOrdersErrorStandardV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetOrdersErrorStandardV2.prototype, "message", void 0);
    return GetOrdersErrorStandardV2;
}(utils_1.SpeakeasyBase));
exports.GetOrdersErrorStandardV2 = GetOrdersErrorStandardV2;
// GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
/**
 * Responsibility for resolving this issue
**/
var GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy, _super);
    function GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy.prototype, "name", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy = GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy;
var GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage, _super);
    function GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage.prototype, "name", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage = GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage;
var GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State, _super);
    function GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State.prototype, "name", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State = GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State;
var GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actionRequiredBy" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "actionRequiredBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detailCode" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "detailCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isClosed" }),
        __metadata("design:type", Boolean)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "isClosed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stage" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "stage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2.prototype, "state", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 = GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2;
var GetOrders200ApplicationJsonOrderResponseV2StatusEventV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2StatusEventV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2)
    ], GetOrders200ApplicationJsonOrderResponseV2StatusEventV2.prototype, "status", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2StatusEventV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2StatusEventV2 = GetOrders200ApplicationJsonOrderResponseV2StatusEventV2;
var GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails, _super);
    function GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails.prototype, "expirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lotNum" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails.prototype, "lotNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serialNum" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails.prototype, "serialNum", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails = GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails;
var GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails, _super);
    function GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalSku" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails.prototype, "externalSku", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalQuantity" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails.prototype, "totalQuantity", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails = GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails;
var GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData, _super);
    function GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=declaredValue" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData.prototype, "declaredValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData.prototype, "sku", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData = GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData;
var GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventoryDetails", elemType: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails }),
        __metadata("design:type", Array)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2.prototype, "inventoryDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lineDetails" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2.prototype, "lineDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedSkuData" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData)
    ], GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2.prototype, "requestedSkuData", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 = GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2;
var GetOrders200ApplicationJsonOrderResponseV2MerchantV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2MerchantV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2MerchantV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2MerchantV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2MerchantV2.prototype, "name", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2MerchantV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2MerchantV2 = GetOrders200ApplicationJsonOrderResponseV2MerchantV2;
var GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iso2" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2.prototype, "iso2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2.prototype, "name", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2 = GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2;
var GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address1" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "address1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address2" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "address2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressLocality" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "addressLocality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressRegion" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "addressRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iso" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2IsoCountryV2)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "iso", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2.prototype, "updatedBy", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2 = GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2;
var GetOrders200ApplicationJsonOrderResponseV2ParentOrder = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2ParentOrder, _super);
    function GetOrders200ApplicationJsonOrderResponseV2ParentOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2ParentOrder.prototype, "id", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2ParentOrder;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2ParentOrder = GetOrders200ApplicationJsonOrderResponseV2ParentOrder;
var GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canReprintPostage" }),
        __metadata("design:type", Boolean)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2.prototype, "canReprintPostage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includePeripherals" }),
        __metadata("design:type", Boolean)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2.prototype, "includePeripherals", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=internalRatesOnly" }),
        __metadata("design:type", Boolean)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2.prototype, "internalRatesOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requiresDimensions" }),
        __metadata("design:type", Boolean)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2.prototype, "requiresDimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=symbol" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2.prototype, "symbol", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 = GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2;
var GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers, _super);
    function GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2)
    ], GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers.prototype, "carrier", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers = GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers;
var GetOrders200ApplicationJsonOrderResponseV2WarehouseV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2WarehouseV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2WarehouseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2WarehouseV2.prototype, "id", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2WarehouseV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2WarehouseV2 = GetOrders200ApplicationJsonOrderResponseV2WarehouseV2;
// GetOrders200ApplicationJsonOrderResponseV2
/**
 * Requires hydrate to be set in the request and the corresponding node will be filled.
**/
var GetOrders200ApplicationJsonOrderResponseV2 = /** @class */ (function (_super) {
    __extends(GetOrders200ApplicationJsonOrderResponseV2, _super);
    function GetOrders200ApplicationJsonOrderResponseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentStatus" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2StatusEventV2)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "currentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=departDate" }),
        __metadata("design:type", Date)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "departDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dispatchDate" }),
        __metadata("design:type", Date)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "dispatchDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrator" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "integrator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lineItems", elemType: GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 }),
        __metadata("design:type", Array)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "lineItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchant" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2MerchantV2)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "merchant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "merchantOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantShippingMethod" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "merchantShippingMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalConsignee" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "originalConsignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentOrder" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2ParentOrder)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "parentOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchaseOrderNum" }),
        __metadata("design:type", String)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "purchaseOrderNum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recordedOn" }),
        __metadata("design:type", Date)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "recordedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackingNumbers", elemType: GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers }),
        __metadata("design:type", Array)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "trackingNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validatedConsignee" }),
        __metadata("design:type", shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "validatedConsignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse" }),
        __metadata("design:type", GetOrders200ApplicationJsonOrderResponseV2WarehouseV2)
    ], GetOrders200ApplicationJsonOrderResponseV2.prototype, "warehouse", void 0);
    return GetOrders200ApplicationJsonOrderResponseV2;
}(utils_1.SpeakeasyBase));
exports.GetOrders200ApplicationJsonOrderResponseV2 = GetOrders200ApplicationJsonOrderResponseV2;
var GetOrdersRequest = /** @class */ (function (_super) {
    __extends(GetOrdersRequest, _super);
    function GetOrdersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrdersQueryParams)
    ], GetOrdersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrdersSecurity)
    ], GetOrdersRequest.prototype, "security", void 0);
    return GetOrdersRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrdersRequest = GetOrdersRequest;
var GetOrdersResponse = /** @class */ (function (_super) {
    __extends(GetOrdersResponse, _super);
    function GetOrdersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrdersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrdersErrorStandardV2)
    ], GetOrdersResponse.prototype, "errorStandardV2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrdersResponse.prototype, "orderResponseOneOfV2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrdersResponse.prototype, "statusCode", void 0);
    return GetOrdersResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrdersResponse = GetOrdersResponse;
