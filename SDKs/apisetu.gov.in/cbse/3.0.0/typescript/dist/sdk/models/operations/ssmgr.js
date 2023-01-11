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
exports.SsmgrResponse = exports.SsmgrRequest = exports.Ssmgr504ApplicationJson = exports.Ssmgr504ApplicationJsonErrorDescriptionEnum = exports.Ssmgr504ApplicationJsonErrorEnum = exports.Ssmgr503ApplicationJson = exports.Ssmgr503ApplicationJsonErrorDescriptionEnum = exports.Ssmgr503ApplicationJsonErrorEnum = exports.Ssmgr502ApplicationJson = exports.Ssmgr502ApplicationJsonErrorDescriptionEnum = exports.Ssmgr502ApplicationJsonErrorEnum = exports.Ssmgr500ApplicationJson = exports.Ssmgr500ApplicationJsonErrorDescriptionEnum = exports.Ssmgr500ApplicationJsonErrorEnum = exports.Ssmgr404ApplicationJson = exports.Ssmgr404ApplicationJsonErrorDescriptionEnum = exports.Ssmgr404ApplicationJsonErrorEnum = exports.Ssmgr401ApplicationJson = exports.Ssmgr401ApplicationJsonErrorDescriptionEnum = exports.Ssmgr401ApplicationJsonErrorEnum = exports.Ssmgr400ApplicationJson = exports.Ssmgr400ApplicationJsonErrorDescriptionEnum = exports.Ssmgr400ApplicationJsonErrorEnum = exports.SsmgrSecurity = exports.SsmgrRequestBody = exports.SsmgrRequestBodyFormatEnum = exports.SsmgrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SsmgrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(SsmgrRequestBodyCertificateParameters, _super);
    function SsmgrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], SsmgrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], SsmgrRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], SsmgrRequestBodyCertificateParameters.prototype, "year", void 0);
    return SsmgrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.SsmgrRequestBodyCertificateParameters = SsmgrRequestBodyCertificateParameters;
var SsmgrRequestBodyFormatEnum;
(function (SsmgrRequestBodyFormatEnum) {
    SsmgrRequestBodyFormatEnum["Pdf"] = "pdf";
})(SsmgrRequestBodyFormatEnum = exports.SsmgrRequestBodyFormatEnum || (exports.SsmgrRequestBodyFormatEnum = {}));
var SsmgrRequestBody = /** @class */ (function (_super) {
    __extends(SsmgrRequestBody, _super);
    function SsmgrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", SsmgrRequestBodyCertificateParameters)
    ], SsmgrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], SsmgrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], SsmgrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], SsmgrRequestBody.prototype, "txnId", void 0);
    return SsmgrRequestBody;
}(utils_1.SpeakeasyBase));
exports.SsmgrRequestBody = SsmgrRequestBody;
var SsmgrSecurity = /** @class */ (function (_super) {
    __extends(SsmgrSecurity, _super);
    function SsmgrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], SsmgrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], SsmgrSecurity.prototype, "clientId", void 0);
    return SsmgrSecurity;
}(utils_1.SpeakeasyBase));
exports.SsmgrSecurity = SsmgrSecurity;
var Ssmgr400ApplicationJsonErrorEnum;
(function (Ssmgr400ApplicationJsonErrorEnum) {
    Ssmgr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ssmgr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ssmgr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ssmgr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ssmgr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ssmgr400ApplicationJsonErrorEnum = exports.Ssmgr400ApplicationJsonErrorEnum || (exports.Ssmgr400ApplicationJsonErrorEnum = {}));
var Ssmgr400ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr400ApplicationJsonErrorDescriptionEnum) {
    Ssmgr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ssmgr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ssmgr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ssmgr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ssmgr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ssmgr400ApplicationJsonErrorDescriptionEnum = exports.Ssmgr400ApplicationJsonErrorDescriptionEnum || (exports.Ssmgr400ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr400ApplicationJson, _super);
    function Ssmgr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr400ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ssmgr400ApplicationJson = Ssmgr400ApplicationJson;
var Ssmgr401ApplicationJsonErrorEnum;
(function (Ssmgr401ApplicationJsonErrorEnum) {
    Ssmgr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ssmgr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ssmgr401ApplicationJsonErrorEnum = exports.Ssmgr401ApplicationJsonErrorEnum || (exports.Ssmgr401ApplicationJsonErrorEnum = {}));
var Ssmgr401ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr401ApplicationJsonErrorDescriptionEnum) {
    Ssmgr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ssmgr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ssmgr401ApplicationJsonErrorDescriptionEnum = exports.Ssmgr401ApplicationJsonErrorDescriptionEnum || (exports.Ssmgr401ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr401ApplicationJson, _super);
    function Ssmgr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr401ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ssmgr401ApplicationJson = Ssmgr401ApplicationJson;
var Ssmgr404ApplicationJsonErrorEnum;
(function (Ssmgr404ApplicationJsonErrorEnum) {
    Ssmgr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ssmgr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ssmgr404ApplicationJsonErrorEnum = exports.Ssmgr404ApplicationJsonErrorEnum || (exports.Ssmgr404ApplicationJsonErrorEnum = {}));
var Ssmgr404ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr404ApplicationJsonErrorDescriptionEnum) {
    Ssmgr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ssmgr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ssmgr404ApplicationJsonErrorDescriptionEnum = exports.Ssmgr404ApplicationJsonErrorDescriptionEnum || (exports.Ssmgr404ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr404ApplicationJson, _super);
    function Ssmgr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr404ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ssmgr404ApplicationJson = Ssmgr404ApplicationJson;
var Ssmgr500ApplicationJsonErrorEnum;
(function (Ssmgr500ApplicationJsonErrorEnum) {
    Ssmgr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ssmgr500ApplicationJsonErrorEnum = exports.Ssmgr500ApplicationJsonErrorEnum || (exports.Ssmgr500ApplicationJsonErrorEnum = {}));
var Ssmgr500ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr500ApplicationJsonErrorDescriptionEnum) {
    Ssmgr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ssmgr500ApplicationJsonErrorDescriptionEnum = exports.Ssmgr500ApplicationJsonErrorDescriptionEnum || (exports.Ssmgr500ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr500ApplicationJson, _super);
    function Ssmgr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr500ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ssmgr500ApplicationJson = Ssmgr500ApplicationJson;
var Ssmgr502ApplicationJsonErrorEnum;
(function (Ssmgr502ApplicationJsonErrorEnum) {
    Ssmgr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ssmgr502ApplicationJsonErrorEnum = exports.Ssmgr502ApplicationJsonErrorEnum || (exports.Ssmgr502ApplicationJsonErrorEnum = {}));
var Ssmgr502ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr502ApplicationJsonErrorDescriptionEnum) {
    Ssmgr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ssmgr502ApplicationJsonErrorDescriptionEnum = exports.Ssmgr502ApplicationJsonErrorDescriptionEnum || (exports.Ssmgr502ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr502ApplicationJson, _super);
    function Ssmgr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr502ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ssmgr502ApplicationJson = Ssmgr502ApplicationJson;
var Ssmgr503ApplicationJsonErrorEnum;
(function (Ssmgr503ApplicationJsonErrorEnum) {
    Ssmgr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ssmgr503ApplicationJsonErrorEnum = exports.Ssmgr503ApplicationJsonErrorEnum || (exports.Ssmgr503ApplicationJsonErrorEnum = {}));
var Ssmgr503ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr503ApplicationJsonErrorDescriptionEnum) {
    Ssmgr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ssmgr503ApplicationJsonErrorDescriptionEnum = exports.Ssmgr503ApplicationJsonErrorDescriptionEnum || (exports.Ssmgr503ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr503ApplicationJson, _super);
    function Ssmgr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr503ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ssmgr503ApplicationJson = Ssmgr503ApplicationJson;
var Ssmgr504ApplicationJsonErrorEnum;
(function (Ssmgr504ApplicationJsonErrorEnum) {
    Ssmgr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ssmgr504ApplicationJsonErrorEnum = exports.Ssmgr504ApplicationJsonErrorEnum || (exports.Ssmgr504ApplicationJsonErrorEnum = {}));
var Ssmgr504ApplicationJsonErrorDescriptionEnum;
(function (Ssmgr504ApplicationJsonErrorDescriptionEnum) {
    Ssmgr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ssmgr504ApplicationJsonErrorDescriptionEnum = exports.Ssmgr504ApplicationJsonErrorDescriptionEnum || (exports.Ssmgr504ApplicationJsonErrorDescriptionEnum = {}));
var Ssmgr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ssmgr504ApplicationJson, _super);
    function Ssmgr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ssmgr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ssmgr504ApplicationJson.prototype, "errorDescription", void 0);
    return Ssmgr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ssmgr504ApplicationJson = Ssmgr504ApplicationJson;
var SsmgrRequest = /** @class */ (function (_super) {
    __extends(SsmgrRequest, _super);
    function SsmgrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SsmgrRequestBody)
    ], SsmgrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SsmgrSecurity)
    ], SsmgrRequest.prototype, "security", void 0);
    return SsmgrRequest;
}(utils_1.SpeakeasyBase));
exports.SsmgrRequest = SsmgrRequest;
var SsmgrResponse = /** @class */ (function (_super) {
    __extends(SsmgrResponse, _super);
    function SsmgrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SsmgrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SsmgrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ssmgr400ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ssmgr401ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ssmgr404ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ssmgr500ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ssmgr502ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ssmgr503ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ssmgr504ApplicationJson)
    ], SsmgrResponse.prototype, "ssmgr504ApplicationJSONObject", void 0);
    return SsmgrResponse;
}(utils_1.SpeakeasyBase));
exports.SsmgrResponse = SsmgrResponse;
