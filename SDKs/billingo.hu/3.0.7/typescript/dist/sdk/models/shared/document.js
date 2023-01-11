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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var utils_1 = require("../../../internal/utils");
var currencyenum_1 = require("./currencyenum");
var documentitem_1 = require("./documentitem");
var documentlanguageenum_1 = require("./documentlanguageenum");
var documentnotificationstatusenum_1 = require("./documentnotificationstatusenum");
var documentorganization_1 = require("./documentorganization");
var partner_1 = require("./partner");
var paymentmethodenum_1 = require("./paymentmethodenum");
var paymentstatusenum_1 = require("./paymentstatusenum");
var documentsettings_1 = require("./documentsettings");
var documentsummary_1 = require("./documentsummary");
var documenttypeenum_1 = require("./documenttypeenum");
// Document
/**
 * Document object representing your invoice.
**/
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block_id" }),
        __metadata("design:type", Number)
    ], Document.prototype, "blockId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelled" }),
        __metadata("design:type", Boolean)
    ], Document.prototype, "cancelled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], Document.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversion_rate" }),
        __metadata("design:type", Number)
    ], Document.prototype, "conversionRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Document.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], Document.prototype, "dueDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=electronic" }),
        __metadata("design:type", Boolean)
    ], Document.prototype, "electronic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fulfillment_date" }),
        __metadata("design:type", Date)
    ], Document.prototype, "fulfillmentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gross_total" }),
        __metadata("design:type", Number)
    ], Document.prototype, "grossTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Document.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_date" }),
        __metadata("design:type", Date)
    ], Document.prototype, "invoiceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice_number" }),
        __metadata("design:type", String)
    ], Document.prototype, "invoiceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: documentitem_1.DocumentItem }),
        __metadata("design:type", Array)
    ], Document.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], Document.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notification_status" }),
        __metadata("design:type", String)
    ], Document.prototype, "notificationStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization" }),
        __metadata("design:type", documentorganization_1.DocumentOrganization)
    ], Document.prototype, "organization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paid_date" }),
        __metadata("design:type", Date)
    ], Document.prototype, "paidDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=partner" }),
        __metadata("design:type", partner_1.Partner)
    ], Document.prototype, "partner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payment_method" }),
        __metadata("design:type", String)
    ], Document.prototype, "paymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payment_status" }),
        __metadata("design:type", String)
    ], Document.prototype, "paymentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", documentsettings_1.DocumentSettings)
    ], Document.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=summary" }),
        __metadata("design:type", documentsummary_1.DocumentSummary)
    ], Document.prototype, "summary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Document.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Document.prototype, "type", void 0);
    return Document;
}(utils_1.SpeakeasyBase));
exports.Document = Document;
