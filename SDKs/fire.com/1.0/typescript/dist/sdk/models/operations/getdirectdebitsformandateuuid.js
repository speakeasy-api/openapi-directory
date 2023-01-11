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
exports.GetDirectDebitsForMandateUuidResponse = exports.GetDirectDebitsForMandateUuidRequest = exports.GetDirectDebitsForMandateUuidDirectDebits = exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebit = exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum = exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum = exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = exports.GetDirectDebitsForMandateUuidQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDirectDebitsForMandateUuidQueryParams = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidQueryParams, _super);
    function GetDirectDebitsForMandateUuidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=mandateUuid" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidQueryParams.prototype, "mandateUuid", void 0);
    return GetDirectDebitsForMandateUuidQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDirectDebitsForMandateUuidQueryParams = GetDirectDebitsForMandateUuidQueryParams;
var GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum;
(function (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum) {
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Zero"] = "0";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["One"] = "1";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Two"] = "2";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Three"] = "3";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Four"] = "4";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Five"] = "5";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Six"] = "6";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Seven"] = "7";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Eight"] = "8";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["Nine"] = "9";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["A"] = "A";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum["B"] = "B";
})(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum || (exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum = {}));
var GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum;
(function (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum) {
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["Recieved"] = "RECIEVED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectRequested"] = "REJECT_REQUESTED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectReadyForProcessing"] = "REJECT_READY_FOR_PROCESSING";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectRecordInProgress"] = "REJECT_RECORD_IN_PROGRESS";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectRecorded"] = "REJECT_RECORDED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectFileCreated"] = "REJECT_FILE_CREATED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RejectFileSent"] = "REJECT_FILE_SENT";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["Collected"] = "COLLECTED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundRequested"] = "REFUND_REQUESTED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundRecordInProgress"] = "REFUND_RECORD_IN_PROGRESS";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundRecorded"] = "REFUND_RECORDED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundFileCreated"] = "REFUND_FILE_CREATED";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum["RefundFileSent"] = "REFUND_FILE_SENT";
})(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum = exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum || (exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum = {}));
var GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum;
(function (GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum) {
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum["FirstCollection"] = "FIRST_COLLECTION";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum["OngoingCollection"] = "ONGOING_COLLECTION";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum["RepresentedCollection"] = "REPRESENTED_COLLECTION";
    GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum["FinalCollection"] = "FINAL_COLLECTION";
})(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum = exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum || (exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum = {}));
var GetDirectDebitsForMandateUuidDirectDebitsDirectDebit = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidDirectDebitsDirectDebit, _super);
    function GetDirectDebitsForMandateUuidDirectDebitsDirectDebit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directDebitReference" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "directDebitReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directDebitUuid" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "directDebitUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isDDIC" }),
        __metadata("design:type", Boolean)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "isDDIC", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandateUUid" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "mandateUUid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originatorAlias" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "originatorAlias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originatorName" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "originatorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originatorReference" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "originatorReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemeRejectReason" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "schemeRejectReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemeRejectReasonCode" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "schemeRejectReasonCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetIcan" }),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "targetIcan", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetPayeeId" }),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "targetPayeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidDirectDebitsDirectDebit.prototype, "type", void 0);
    return GetDirectDebitsForMandateUuidDirectDebitsDirectDebit;
}(utils_1.SpeakeasyBase));
exports.GetDirectDebitsForMandateUuidDirectDebitsDirectDebit = GetDirectDebitsForMandateUuidDirectDebitsDirectDebit;
var GetDirectDebitsForMandateUuidDirectDebits = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidDirectDebits, _super);
    function GetDirectDebitsForMandateUuidDirectDebits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directdebits", elemType: GetDirectDebitsForMandateUuidDirectDebitsDirectDebit }),
        __metadata("design:type", Array)
    ], GetDirectDebitsForMandateUuidDirectDebits.prototype, "directdebits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidDirectDebits.prototype, "total", void 0);
    return GetDirectDebitsForMandateUuidDirectDebits;
}(utils_1.SpeakeasyBase));
exports.GetDirectDebitsForMandateUuidDirectDebits = GetDirectDebitsForMandateUuidDirectDebits;
var GetDirectDebitsForMandateUuidRequest = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidRequest, _super);
    function GetDirectDebitsForMandateUuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDirectDebitsForMandateUuidQueryParams)
    ], GetDirectDebitsForMandateUuidRequest.prototype, "queryParams", void 0);
    return GetDirectDebitsForMandateUuidRequest;
}(utils_1.SpeakeasyBase));
exports.GetDirectDebitsForMandateUuidRequest = GetDirectDebitsForMandateUuidRequest;
var GetDirectDebitsForMandateUuidResponse = /** @class */ (function (_super) {
    __extends(GetDirectDebitsForMandateUuidResponse, _super);
    function GetDirectDebitsForMandateUuidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDirectDebitsForMandateUuidResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDirectDebitsForMandateUuidDirectDebits)
    ], GetDirectDebitsForMandateUuidResponse.prototype, "directDebits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDirectDebitsForMandateUuidResponse.prototype, "statusCode", void 0);
    return GetDirectDebitsForMandateUuidResponse;
}(utils_1.SpeakeasyBase));
exports.GetDirectDebitsForMandateUuidResponse = GetDirectDebitsForMandateUuidResponse;
