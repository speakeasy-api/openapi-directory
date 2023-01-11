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
exports.ListInvoicesResponse = exports.ListInvoices401ApplicationJson = exports.ListInvoices200ApplicationJson = exports.ListInvoices200ApplicationJsonMeta = exports.ListInvoices200ApplicationJsonLinks = exports.ListInvoices200ApplicationJsonLinksPages2 = exports.ListInvoices200ApplicationJsonLinksPages1 = exports.ListInvoices200ApplicationJsonInvoices = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
// ListInvoices200ApplicationJsonInvoices
/**
 * The invoice preview.
**/
var ListInvoices200ApplicationJsonInvoices = /** @class */ (function (_super) {
    __extends(ListInvoices200ApplicationJsonInvoices, _super);
    function ListInvoices200ApplicationJsonInvoices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], ListInvoices200ApplicationJsonInvoices.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_period" }),
        __metadata("design:type", String)
    ], ListInvoices200ApplicationJsonInvoices.prototype, "invoicePeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_uuid" }),
        __metadata("design:type", String)
    ], ListInvoices200ApplicationJsonInvoices.prototype, "invoiceUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], ListInvoices200ApplicationJsonInvoices.prototype, "updatedAt", void 0);
    return ListInvoices200ApplicationJsonInvoices;
}(utils_1.SpeakeasyBase));
exports.ListInvoices200ApplicationJsonInvoices = ListInvoices200ApplicationJsonInvoices;
var ListInvoices200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListInvoices200ApplicationJsonLinksPages1, _super);
    function ListInvoices200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListInvoices200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListInvoices200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListInvoices200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListInvoices200ApplicationJsonLinksPages1 = ListInvoices200ApplicationJsonLinksPages1;
var ListInvoices200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListInvoices200ApplicationJsonLinksPages2, _super);
    function ListInvoices200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListInvoices200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListInvoices200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListInvoices200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListInvoices200ApplicationJsonLinksPages2 = ListInvoices200ApplicationJsonLinksPages2;
var ListInvoices200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListInvoices200ApplicationJsonLinks, _super);
    function ListInvoices200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListInvoices200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListInvoices200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListInvoices200ApplicationJsonLinks = ListInvoices200ApplicationJsonLinks;
// ListInvoices200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListInvoices200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListInvoices200ApplicationJsonMeta, _super);
    function ListInvoices200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListInvoices200ApplicationJsonMeta.prototype, "total", void 0);
    return ListInvoices200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListInvoices200ApplicationJsonMeta = ListInvoices200ApplicationJsonMeta;
var ListInvoices200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListInvoices200ApplicationJson, _super);
    function ListInvoices200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_preview" }),
        __metadata("design:type", shared.Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems)
    ], ListInvoices200ApplicationJson.prototype, "invoicePreview", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoices", elemType: ListInvoices200ApplicationJsonInvoices }),
        __metadata("design:type", Array)
    ], ListInvoices200ApplicationJson.prototype, "invoices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListInvoices200ApplicationJsonLinks)
    ], ListInvoices200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListInvoices200ApplicationJsonMeta)
    ], ListInvoices200ApplicationJson.prototype, "meta", void 0);
    return ListInvoices200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListInvoices200ApplicationJson = ListInvoices200ApplicationJson;
var ListInvoices401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListInvoices401ApplicationJson, _super);
    function ListInvoices401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListInvoices401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListInvoices401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListInvoices401ApplicationJson.prototype, "requestId", void 0);
    return ListInvoices401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListInvoices401ApplicationJson = ListInvoices401ApplicationJson;
var ListInvoicesResponse = /** @class */ (function (_super) {
    __extends(ListInvoicesResponse, _super);
    function ListInvoicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListInvoicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListInvoicesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListInvoicesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInvoices200ApplicationJson)
    ], ListInvoicesResponse.prototype, "listInvoices200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListInvoices401ApplicationJson)
    ], ListInvoicesResponse.prototype, "listInvoices401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListInvoicesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListInvoicesResponse;
}(utils_1.SpeakeasyBase));
exports.ListInvoicesResponse = ListInvoicesResponse;
