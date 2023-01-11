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
exports.BillingLineItem = exports.BillingLineItemProcedureTypeEnum = exports.BillingLineItemBillingStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var BillingLineItemBillingStatusEnum;
(function (BillingLineItemBillingStatusEnum) {
    BillingLineItemBillingStatusEnum["Unknown"] = "";
    BillingLineItemBillingStatusEnum["IncompleteInformation"] = "Incomplete Information";
    BillingLineItemBillingStatusEnum["InProcessEmdeon"] = "In Process Emdeon";
    BillingLineItemBillingStatusEnum["InProcessIHcfa"] = "In Process iHCFA";
    BillingLineItemBillingStatusEnum["InProcessGateway"] = "In Process Gateway";
    BillingLineItemBillingStatusEnum["InProcessJopari"] = "In Process Jopari";
    BillingLineItemBillingStatusEnum["InProcessWaystar"] = "In Process Waystar";
    BillingLineItemBillingStatusEnum["RejectedEmdeon"] = "Rejected Emdeon";
    BillingLineItemBillingStatusEnum["RejectedIHcfa"] = "Rejected iHCFA";
    BillingLineItemBillingStatusEnum["RejectedGateway"] = "Rejected Gateway";
    BillingLineItemBillingStatusEnum["RejectedJopari"] = "Rejected Jopari";
    BillingLineItemBillingStatusEnum["RejectedWaystar"] = "Rejected Waystar";
    BillingLineItemBillingStatusEnum["InProcessPayer"] = "In Process Payer";
    BillingLineItemBillingStatusEnum["PayerAcknowledged"] = "Payer Acknowledged";
    BillingLineItemBillingStatusEnum["RejectedPayer"] = "Rejected Payer";
    BillingLineItemBillingStatusEnum["PaidInFull"] = "Paid in Full";
    BillingLineItemBillingStatusEnum["PartiallyPaid"] = "Partially Paid";
    BillingLineItemBillingStatusEnum["CoordinationOfBenefits"] = "Coordination of Benefits";
    BillingLineItemBillingStatusEnum["EraReceived"] = "ERA Received";
    BillingLineItemBillingStatusEnum["EraDenied"] = "ERA Denied";
})(BillingLineItemBillingStatusEnum = exports.BillingLineItemBillingStatusEnum || (exports.BillingLineItemBillingStatusEnum = {}));
var BillingLineItemProcedureTypeEnum;
(function (BillingLineItemProcedureTypeEnum) {
    BillingLineItemProcedureTypeEnum["C"] = "C";
    BillingLineItemProcedureTypeEnum["H"] = "H";
    BillingLineItemProcedureTypeEnum["U"] = "U";
    BillingLineItemProcedureTypeEnum["S"] = "S";
})(BillingLineItemProcedureTypeEnum = exports.BillingLineItemProcedureTypeEnum || (exports.BillingLineItemProcedureTypeEnum = {}));
var BillingLineItem = /** @class */ (function (_super) {
    __extends(BillingLineItem, _super);
    function BillingLineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adjustment" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "adjustment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "allowed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appointment" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance_ins" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "balanceIns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance_pt" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "balancePt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balance_total" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "balanceTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billed" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "billed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_status" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "billingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=denied_flag" }),
        __metadata("design:type", Boolean)
    ], BillingLineItem.prototype, "deniedFlag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diagnosis_pointers" }),
        __metadata("design:type", Array)
    ], BillingLineItem.prototype, "diagnosisPointers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expected_reimbursement" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "expectedReimbursement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ins1_paid" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "ins1Paid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ins2_paid" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "ins2Paid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ins3_paid" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "ins3Paid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ins_total" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "insTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_status" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "insuranceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modifiers" }),
        __metadata("design:type", Array)
    ], BillingLineItem.prototype, "modifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paid_total" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "paidTotal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=posted_date" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "postedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=procedure_type" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "procedureType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pt_paid" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "ptPaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], BillingLineItem.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_date" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "serviceDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=units" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "units", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], BillingLineItem.prototype, "updatedAt", void 0);
    return BillingLineItem;
}(utils_1.SpeakeasyBase));
exports.BillingLineItem = BillingLineItem;
