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
exports.GetReturnsResponse = exports.GetReturnsRequest = exports.GetReturnsReturnsArrayV2 = exports.GetReturnsReturnsArrayV2Meta = exports.GetReturnsReturnsArrayV2MetaPaginationV2 = exports.GetReturnsReturnsArrayV2ReturnV2 = exports.GetReturnsReturnsArrayV2ReturnV2UserV2 = exports.GetReturnsReturnsArrayV2ReturnV2Status = exports.GetReturnsReturnsArrayV2ReturnV2RmaItemV2 = exports.GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason = exports.GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item = exports.GetReturnsReturnsArrayV2ReturnV2Reason = exports.GetReturnsReturnsArrayV2ReturnV2Order = exports.GetReturnsSecurity = exports.GetReturnsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetReturnsQueryParams = /** @class */ (function (_super) {
    __extends(GetReturnsQueryParams, _super);
    function GetReturnsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromDate" }),
        __metadata("design:type", String)
    ], GetReturnsQueryParams.prototype, "fromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetReturnsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetReturnsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=toDate" }),
        __metadata("design:type", String)
    ], GetReturnsQueryParams.prototype, "toDate", void 0);
    return GetReturnsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReturnsQueryParams = GetReturnsQueryParams;
var GetReturnsSecurity = /** @class */ (function (_super) {
    __extends(GetReturnsSecurity, _super);
    function GetReturnsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], GetReturnsSecurity.prototype, "fdcAuth", void 0);
    return GetReturnsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetReturnsSecurity = GetReturnsSecurity;
var GetReturnsReturnsArrayV2ReturnV2Order = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2ReturnV2Order, _super);
    function GetReturnsReturnsArrayV2ReturnV2Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2Order.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantId" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2Order.prototype, "merchantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2Order.prototype, "merchantOrderId", void 0);
    return GetReturnsReturnsArrayV2ReturnV2Order;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2ReturnV2Order = GetReturnsReturnsArrayV2ReturnV2Order;
var GetReturnsReturnsArrayV2ReturnV2Reason = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2ReturnV2Reason, _super);
    function GetReturnsReturnsArrayV2ReturnV2Reason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2Reason.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2Reason.prototype, "title", void 0);
    return GetReturnsReturnsArrayV2ReturnV2Reason;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2ReturnV2Reason = GetReturnsReturnsArrayV2ReturnV2Reason;
var GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item, _super);
    function GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item.prototype, "sku", void 0);
    return GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item = GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item;
var GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason, _super);
    function GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason.prototype, "title", void 0);
    return GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason = GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason;
var GetReturnsReturnsArrayV2ReturnV2RmaItemV2 = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2ReturnV2RmaItemV2, _super);
    function GetReturnsReturnsArrayV2ReturnV2RmaItemV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=item" }),
        __metadata("design:type", GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2.prototype, "item", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nonRestockedReason" }),
        __metadata("design:type", GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2.prototype, "nonRestockedReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityExpected" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2.prototype, "quantityExpected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityRestocked" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2.prototype, "quantityRestocked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityReturned" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2.prototype, "quantityReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityShipped" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2RmaItemV2.prototype, "quantityShipped", void 0);
    return GetReturnsReturnsArrayV2ReturnV2RmaItemV2;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2ReturnV2RmaItemV2 = GetReturnsReturnsArrayV2ReturnV2RmaItemV2;
var GetReturnsReturnsArrayV2ReturnV2Status = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2ReturnV2Status, _super);
    function GetReturnsReturnsArrayV2ReturnV2Status() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2Status.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2Status.prototype, "title", void 0);
    return GetReturnsReturnsArrayV2ReturnV2Status;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2ReturnV2Status = GetReturnsReturnsArrayV2ReturnV2Status;
var GetReturnsReturnsArrayV2ReturnV2UserV2 = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2ReturnV2UserV2, _super);
    function GetReturnsReturnsArrayV2ReturnV2UserV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2UserV2.prototype, "id", void 0);
    return GetReturnsReturnsArrayV2ReturnV2UserV2;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2ReturnV2UserV2 = GetReturnsReturnsArrayV2ReturnV2UserV2;
var GetReturnsReturnsArrayV2ReturnV2 = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2ReturnV2, _super);
    function GetReturnsReturnsArrayV2ReturnV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order" }),
        __metadata("design:type", GetReturnsReturnsArrayV2ReturnV2Order)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", GetReturnsReturnsArrayV2ReturnV2Reason)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=returnedBy" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "returnedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rmaItems", elemType: GetReturnsReturnsArrayV2ReturnV2RmaItemV2 }),
        __metadata("design:type", Array)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "rmaItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rmaNumber" }),
        __metadata("design:type", String)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "rmaNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", GetReturnsReturnsArrayV2ReturnV2Status)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", GetReturnsReturnsArrayV2ReturnV2UserV2)
    ], GetReturnsReturnsArrayV2ReturnV2.prototype, "updatedBy", void 0);
    return GetReturnsReturnsArrayV2ReturnV2;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2ReturnV2 = GetReturnsReturnsArrayV2ReturnV2;
var GetReturnsReturnsArrayV2MetaPaginationV2 = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2MetaPaginationV2, _super);
    function GetReturnsReturnsArrayV2MetaPaginationV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2MetaPaginationV2.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentPage" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2MetaPaginationV2.prototype, "currentPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2MetaPaginationV2.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalPages" }),
        __metadata("design:type", Number)
    ], GetReturnsReturnsArrayV2MetaPaginationV2.prototype, "totalPages", void 0);
    return GetReturnsReturnsArrayV2MetaPaginationV2;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2MetaPaginationV2 = GetReturnsReturnsArrayV2MetaPaginationV2;
var GetReturnsReturnsArrayV2Meta = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2Meta, _super);
    function GetReturnsReturnsArrayV2Meta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", GetReturnsReturnsArrayV2MetaPaginationV2)
    ], GetReturnsReturnsArrayV2Meta.prototype, "pagination", void 0);
    return GetReturnsReturnsArrayV2Meta;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2Meta = GetReturnsReturnsArrayV2Meta;
var GetReturnsReturnsArrayV2 = /** @class */ (function (_super) {
    __extends(GetReturnsReturnsArrayV2, _super);
    function GetReturnsReturnsArrayV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: GetReturnsReturnsArrayV2ReturnV2 }),
        __metadata("design:type", Array)
    ], GetReturnsReturnsArrayV2.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetReturnsReturnsArrayV2Meta)
    ], GetReturnsReturnsArrayV2.prototype, "meta", void 0);
    return GetReturnsReturnsArrayV2;
}(utils_1.SpeakeasyBase));
exports.GetReturnsReturnsArrayV2 = GetReturnsReturnsArrayV2;
var GetReturnsRequest = /** @class */ (function (_super) {
    __extends(GetReturnsRequest, _super);
    function GetReturnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReturnsQueryParams)
    ], GetReturnsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReturnsSecurity)
    ], GetReturnsRequest.prototype, "security", void 0);
    return GetReturnsRequest;
}(utils_1.SpeakeasyBase));
exports.GetReturnsRequest = GetReturnsRequest;
var GetReturnsResponse = /** @class */ (function (_super) {
    __extends(GetReturnsResponse, _super);
    function GetReturnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReturnsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReturnsReturnsArrayV2)
    ], GetReturnsResponse.prototype, "returnsArrayV2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReturnsResponse.prototype, "statusCode", void 0);
    return GetReturnsResponse;
}(utils_1.SpeakeasyBase));
exports.GetReturnsResponse = GetReturnsResponse;
