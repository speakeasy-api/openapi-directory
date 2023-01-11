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
exports.ListBillingHistoryResponse = exports.ListBillingHistory401ApplicationJson = exports.ListBillingHistory200ApplicationJson = exports.ListBillingHistory200ApplicationJsonMeta = exports.ListBillingHistory200ApplicationJsonLinks = exports.ListBillingHistory200ApplicationJsonLinksPages2 = exports.ListBillingHistory200ApplicationJsonLinksPages1 = exports.ListBillingHistory200ApplicationJsonBillingHistory = exports.ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum;
(function (ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum) {
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["AchFailure"] = "ACHFailure";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["Adjustment"] = "Adjustment";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["AttemptFailed"] = "AttemptFailed";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["Chargeback"] = "Chargeback";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["Credit"] = "Credit";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["CreditExpiration"] = "CreditExpiration";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["Invoice"] = "Invoice";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["Payment"] = "Payment";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["Refund"] = "Refund";
    ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum["Reversal"] = "Reversal";
})(ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum = exports.ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum || (exports.ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum = {}));
var ListBillingHistory200ApplicationJsonBillingHistory = /** @class */ (function (_super) {
    __extends(ListBillingHistory200ApplicationJsonBillingHistory, _super);
    function ListBillingHistory200ApplicationJsonBillingHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonBillingHistory.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ListBillingHistory200ApplicationJsonBillingHistory.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonBillingHistory.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_id" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonBillingHistory.prototype, "invoiceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_uuid" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonBillingHistory.prototype, "invoiceUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonBillingHistory.prototype, "type", void 0);
    return ListBillingHistory200ApplicationJsonBillingHistory;
}(utils_1.SpeakeasyBase));
exports.ListBillingHistory200ApplicationJsonBillingHistory = ListBillingHistory200ApplicationJsonBillingHistory;
var ListBillingHistory200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListBillingHistory200ApplicationJsonLinksPages1, _super);
    function ListBillingHistory200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListBillingHistory200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListBillingHistory200ApplicationJsonLinksPages1 = ListBillingHistory200ApplicationJsonLinksPages1;
var ListBillingHistory200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListBillingHistory200ApplicationJsonLinksPages2, _super);
    function ListBillingHistory200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListBillingHistory200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListBillingHistory200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListBillingHistory200ApplicationJsonLinksPages2 = ListBillingHistory200ApplicationJsonLinksPages2;
var ListBillingHistory200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListBillingHistory200ApplicationJsonLinks, _super);
    function ListBillingHistory200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListBillingHistory200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListBillingHistory200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListBillingHistory200ApplicationJsonLinks = ListBillingHistory200ApplicationJsonLinks;
// ListBillingHistory200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListBillingHistory200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListBillingHistory200ApplicationJsonMeta, _super);
    function ListBillingHistory200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListBillingHistory200ApplicationJsonMeta.prototype, "total", void 0);
    return ListBillingHistory200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListBillingHistory200ApplicationJsonMeta = ListBillingHistory200ApplicationJsonMeta;
var ListBillingHistory200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListBillingHistory200ApplicationJson, _super);
    function ListBillingHistory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_history", elemType: ListBillingHistory200ApplicationJsonBillingHistory }),
        __metadata("design:type", Array)
    ], ListBillingHistory200ApplicationJson.prototype, "billingHistory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListBillingHistory200ApplicationJsonLinks)
    ], ListBillingHistory200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListBillingHistory200ApplicationJsonMeta)
    ], ListBillingHistory200ApplicationJson.prototype, "meta", void 0);
    return ListBillingHistory200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListBillingHistory200ApplicationJson = ListBillingHistory200ApplicationJson;
var ListBillingHistory401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListBillingHistory401ApplicationJson, _super);
    function ListBillingHistory401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListBillingHistory401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListBillingHistory401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListBillingHistory401ApplicationJson.prototype, "requestId", void 0);
    return ListBillingHistory401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListBillingHistory401ApplicationJson = ListBillingHistory401ApplicationJson;
var ListBillingHistoryResponse = /** @class */ (function (_super) {
    __extends(ListBillingHistoryResponse, _super);
    function ListBillingHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBillingHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListBillingHistoryResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListBillingHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBillingHistory200ApplicationJson)
    ], ListBillingHistoryResponse.prototype, "listBillingHistory200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBillingHistory401ApplicationJson)
    ], ListBillingHistoryResponse.prototype, "listBillingHistory401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListBillingHistoryResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListBillingHistoryResponse;
}(utils_1.SpeakeasyBase));
exports.ListBillingHistoryResponse = ListBillingHistoryResponse;
