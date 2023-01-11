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
exports.GetDirectDebitMandatesResponse = exports.GetDirectDebitMandatesMandates = exports.GetDirectDebitMandatesMandatesMandate = exports.GetDirectDebitMandatesMandatesMandateStatusEnum = exports.GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum;
(function (GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum) {
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["AccountDoesNotAcceptDirectDebits"] = "ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["Ddic"] = "DDIC";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["AccountNotFound"] = "ACCOUNT_NOT_FOUND";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["AccountNotLive"] = "ACCOUNT_NOT_LIVE";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["CustomerNotFound"] = "CUSTOMER_NOT_FOUND";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["BusinessNotLive"] = "BUSINESS_NOT_LIVE";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["BusinessNotFull"] = "BUSINESS_NOT_FULL";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["PersonalUserNotLive"] = "PERSONAL_USER_NOT_LIVE";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["PersonalUserNotFull"] = "PERSONAL_USER_NOT_FULL";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["MandateAlreadyExists"] = "MANDATE_ALREADY_EXISTS";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["MandateWithDiferentAccount"] = "MANDATE_WITH_DIFERENT_ACCOUNT";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["NullMandateReference"] = "NULL_MANDATE_REFERENCE";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["InvalidAccountCurrency"] = "INVALID_ACCOUNT_CURRENCY";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["InvalidMandateReference"] = "INVALID_MANDATE_REFERENCE";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["RequestedByCustomerViaSupport"] = "REQUESTED_BY_CUSTOMER_VIA_SUPPORT";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["CustomerAccountClosed"] = "CUSTOMER_ACCOUNT_CLOSED";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["CustomerDeceased"] = "CUSTOMER_DECEASED";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["AccountTransferred"] = "ACCOUNT_TRANSFERRED";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["MandateNotFound"] = "MANDATE_NOT_FOUND";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["AccountTransferredToDifferentAccount"] = "ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["InvalidAccountType"] = "INVALID_ACCOUNT_TYPE";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["MandateExpired"] = "MANDATE_EXPIRED";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["MandateCancelled"] = "MANDATE_CANCELLED";
    GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum["RequestedByCustomer"] = "REQUESTED_BY_CUSTOMER";
})(GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum = exports.GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum || (exports.GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum = {}));
var GetDirectDebitMandatesMandatesMandateStatusEnum;
(function (GetDirectDebitMandatesMandatesMandateStatusEnum) {
    GetDirectDebitMandatesMandatesMandateStatusEnum["Created"] = "CREATED";
    GetDirectDebitMandatesMandatesMandateStatusEnum["Live"] = "LIVE";
    GetDirectDebitMandatesMandatesMandateStatusEnum["RejectRequested"] = "REJECT_REQUESTED";
    GetDirectDebitMandatesMandatesMandateStatusEnum["RejectRecordInProgress"] = "REJECT_RECORD_IN_PROGRESS";
    GetDirectDebitMandatesMandatesMandateStatusEnum["RejectRecorded"] = "REJECT_RECORDED";
    GetDirectDebitMandatesMandatesMandateStatusEnum["RejectFileCreated"] = "REJECT_FILE_CREATED";
    GetDirectDebitMandatesMandatesMandateStatusEnum["RejectFileSent"] = "REJECT_FILE_SENT";
    GetDirectDebitMandatesMandatesMandateStatusEnum["CancelRequested"] = "CANCEL_REQUESTED";
    GetDirectDebitMandatesMandatesMandateStatusEnum["CancelRecordInProgress"] = "CANCEL_RECORD_IN_PROGRESS";
    GetDirectDebitMandatesMandatesMandateStatusEnum["CancelRecorded"] = "CANCEL_RECORDED";
    GetDirectDebitMandatesMandatesMandateStatusEnum["CancelFileCreated"] = "CANCEL_FILE_CREATED";
    GetDirectDebitMandatesMandatesMandateStatusEnum["CancelFileSent"] = "CANCEL_FILE_SENT";
    GetDirectDebitMandatesMandatesMandateStatusEnum["Complete"] = "COMPLETE";
    GetDirectDebitMandatesMandatesMandateStatusEnum["Dormant"] = "DORMANT";
})(GetDirectDebitMandatesMandatesMandateStatusEnum = exports.GetDirectDebitMandatesMandatesMandateStatusEnum || (exports.GetDirectDebitMandatesMandatesMandateStatusEnum = {}));
var GetDirectDebitMandatesMandatesMandate = /** @class */ (function (_super) {
    __extends(GetDirectDebitMandatesMandatesMandate, _super);
    function GetDirectDebitMandatesMandatesMandate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "alias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateCancelled" }),
        __metadata("design:type", Date)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "dateCancelled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateCompleted" }),
        __metadata("design:type", Date)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "dateCompleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fireRejectionReason" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "fireRejectionReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestDirectDebitAmount" }),
        __metadata("design:type", Number)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "latestDirectDebitAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestDirectDebitDate" }),
        __metadata("design:type", Date)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "latestDirectDebitDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandateReference" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "mandateReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandateUuid" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "mandateUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numberOfDirectDebitCollected" }),
        __metadata("design:type", Number)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "numberOfDirectDebitCollected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originatorAlias" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "originatorAlias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originatorLogoUrlLarge" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "originatorLogoUrlLarge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originatorLogoUrlSmall" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "originatorLogoUrlSmall", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originatorName" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "originatorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originatorReference" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "originatorReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemeCancelReason" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "schemeCancelReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemeCancelReasonCode" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "schemeCancelReasonCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetIcan" }),
        __metadata("design:type", Number)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "targetIcan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valueOfDirectDebitCollected" }),
        __metadata("design:type", Number)
    ], GetDirectDebitMandatesMandatesMandate.prototype, "valueOfDirectDebitCollected", void 0);
    return GetDirectDebitMandatesMandatesMandate;
}(utils_1.SpeakeasyBase));
exports.GetDirectDebitMandatesMandatesMandate = GetDirectDebitMandatesMandatesMandate;
var GetDirectDebitMandatesMandates = /** @class */ (function (_super) {
    __extends(GetDirectDebitMandatesMandates, _super);
    function GetDirectDebitMandatesMandates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandates", elemType: GetDirectDebitMandatesMandatesMandate }),
        __metadata("design:type", Array)
    ], GetDirectDebitMandatesMandates.prototype, "mandates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetDirectDebitMandatesMandates.prototype, "total", void 0);
    return GetDirectDebitMandatesMandates;
}(utils_1.SpeakeasyBase));
exports.GetDirectDebitMandatesMandates = GetDirectDebitMandatesMandates;
var GetDirectDebitMandatesResponse = /** @class */ (function (_super) {
    __extends(GetDirectDebitMandatesResponse, _super);
    function GetDirectDebitMandatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDirectDebitMandatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDirectDebitMandatesMandates)
    ], GetDirectDebitMandatesResponse.prototype, "mandates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDirectDebitMandatesResponse.prototype, "statusCode", void 0);
    return GetDirectDebitMandatesResponse;
}(utils_1.SpeakeasyBase));
exports.GetDirectDebitMandatesResponse = GetDirectDebitMandatesResponse;
