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
exports.GetPayeesResponse = exports.GetPayeesPayee = exports.GetPayeesPayeeStatusEnum = exports.GetPayeesPayeeCreatedByEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPayeesPayeeCreatedByEnum;
(function (GetPayeesPayeeCreatedByEnum) {
    GetPayeesPayeeCreatedByEnum["Customer"] = "CUSTOMER";
    GetPayeesPayeeCreatedByEnum["Lodgement"] = "LODGEMENT";
    GetPayeesPayeeCreatedByEnum["DirectDebit"] = "DIRECT DEBIT";
    GetPayeesPayeeCreatedByEnum["OpenBanking"] = "OPEN BANKING";
    GetPayeesPayeeCreatedByEnum["FireOpenPayment"] = "FIRE OPEN PAYMENT";
    GetPayeesPayeeCreatedByEnum["FireDirect"] = "FIRE DIRECT";
})(GetPayeesPayeeCreatedByEnum = exports.GetPayeesPayeeCreatedByEnum || (exports.GetPayeesPayeeCreatedByEnum = {}));
var GetPayeesPayeeStatusEnum;
(function (GetPayeesPayeeStatusEnum) {
    GetPayeesPayeeStatusEnum["Created"] = "CREATED";
    GetPayeesPayeeStatusEnum["Live"] = "LIVE";
    GetPayeesPayeeStatusEnum["Closed"] = "CLOSED";
    GetPayeesPayeeStatusEnum["Archived"] = "ARCHIVED";
})(GetPayeesPayeeStatusEnum = exports.GetPayeesPayeeStatusEnum || (exports.GetPayeesPayeeStatusEnum = {}));
var GetPayeesPayee = /** @class */ (function (_super) {
    __extends(GetPayeesPayee, _super);
    function GetPayeesPayee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountHolderName" }),
        __metadata("design:type", String)
    ], GetPayeesPayee.prototype, "accountHolderName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], GetPayeesPayee.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], GetPayeesPayee.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], GetPayeesPayee.prototype, "bic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], GetPayeesPayee.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetPayeesPayee.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateCreated" }),
        __metadata("design:type", Date)
    ], GetPayeesPayee.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], GetPayeesPayee.prototype, "iban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetPayeesPayee.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nsc" }),
        __metadata("design:type", String)
    ], GetPayeesPayee.prototype, "nsc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPayeesPayee.prototype, "status", void 0);
    return GetPayeesPayee;
}(utils_1.SpeakeasyBase));
exports.GetPayeesPayee = GetPayeesPayee;
var GetPayeesResponse = /** @class */ (function (_super) {
    __extends(GetPayeesResponse, _super);
    function GetPayeesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPayeesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPayeesPayee)
    ], GetPayeesResponse.prototype, "payee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPayeesResponse.prototype, "statusCode", void 0);
    return GetPayeesResponse;
}(utils_1.SpeakeasyBase));
exports.GetPayeesResponse = GetPayeesResponse;
