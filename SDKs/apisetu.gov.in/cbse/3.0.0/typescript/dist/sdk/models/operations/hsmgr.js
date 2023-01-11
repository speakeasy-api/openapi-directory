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
exports.HsmgrResponse = exports.HsmgrRequest = exports.Hsmgr504ApplicationJson = exports.Hsmgr504ApplicationJsonErrorDescriptionEnum = exports.Hsmgr504ApplicationJsonErrorEnum = exports.Hsmgr503ApplicationJson = exports.Hsmgr503ApplicationJsonErrorDescriptionEnum = exports.Hsmgr503ApplicationJsonErrorEnum = exports.Hsmgr502ApplicationJson = exports.Hsmgr502ApplicationJsonErrorDescriptionEnum = exports.Hsmgr502ApplicationJsonErrorEnum = exports.Hsmgr500ApplicationJson = exports.Hsmgr500ApplicationJsonErrorDescriptionEnum = exports.Hsmgr500ApplicationJsonErrorEnum = exports.Hsmgr404ApplicationJson = exports.Hsmgr404ApplicationJsonErrorDescriptionEnum = exports.Hsmgr404ApplicationJsonErrorEnum = exports.Hsmgr401ApplicationJson = exports.Hsmgr401ApplicationJsonErrorDescriptionEnum = exports.Hsmgr401ApplicationJsonErrorEnum = exports.Hsmgr400ApplicationJson = exports.Hsmgr400ApplicationJsonErrorDescriptionEnum = exports.Hsmgr400ApplicationJsonErrorEnum = exports.HsmgrSecurity = exports.HsmgrRequestBody = exports.HsmgrRequestBodyFormatEnum = exports.HsmgrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var HsmgrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(HsmgrRequestBodyCertificateParameters, _super);
    function HsmgrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], HsmgrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rollno" }),
        __metadata("design:type", String)
    ], HsmgrRequestBodyCertificateParameters.prototype, "rollno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], HsmgrRequestBodyCertificateParameters.prototype, "year", void 0);
    return HsmgrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.HsmgrRequestBodyCertificateParameters = HsmgrRequestBodyCertificateParameters;
var HsmgrRequestBodyFormatEnum;
(function (HsmgrRequestBodyFormatEnum) {
    HsmgrRequestBodyFormatEnum["Pdf"] = "pdf";
})(HsmgrRequestBodyFormatEnum = exports.HsmgrRequestBodyFormatEnum || (exports.HsmgrRequestBodyFormatEnum = {}));
var HsmgrRequestBody = /** @class */ (function (_super) {
    __extends(HsmgrRequestBody, _super);
    function HsmgrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", HsmgrRequestBodyCertificateParameters)
    ], HsmgrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], HsmgrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], HsmgrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], HsmgrRequestBody.prototype, "txnId", void 0);
    return HsmgrRequestBody;
}(utils_1.SpeakeasyBase));
exports.HsmgrRequestBody = HsmgrRequestBody;
var HsmgrSecurity = /** @class */ (function (_super) {
    __extends(HsmgrSecurity, _super);
    function HsmgrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], HsmgrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], HsmgrSecurity.prototype, "clientId", void 0);
    return HsmgrSecurity;
}(utils_1.SpeakeasyBase));
exports.HsmgrSecurity = HsmgrSecurity;
var Hsmgr400ApplicationJsonErrorEnum;
(function (Hsmgr400ApplicationJsonErrorEnum) {
    Hsmgr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Hsmgr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Hsmgr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Hsmgr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Hsmgr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Hsmgr400ApplicationJsonErrorEnum = exports.Hsmgr400ApplicationJsonErrorEnum || (exports.Hsmgr400ApplicationJsonErrorEnum = {}));
var Hsmgr400ApplicationJsonErrorDescriptionEnum;
(function (Hsmgr400ApplicationJsonErrorDescriptionEnum) {
    Hsmgr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Hsmgr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Hsmgr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Hsmgr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Hsmgr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Hsmgr400ApplicationJsonErrorDescriptionEnum = exports.Hsmgr400ApplicationJsonErrorDescriptionEnum || (exports.Hsmgr400ApplicationJsonErrorDescriptionEnum = {}));
var Hsmgr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Hsmgr400ApplicationJson, _super);
    function Hsmgr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hsmgr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hsmgr400ApplicationJson.prototype, "errorDescription", void 0);
    return Hsmgr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hsmgr400ApplicationJson = Hsmgr400ApplicationJson;
var Hsmgr401ApplicationJsonErrorEnum;
(function (Hsmgr401ApplicationJsonErrorEnum) {
    Hsmgr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Hsmgr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Hsmgr401ApplicationJsonErrorEnum = exports.Hsmgr401ApplicationJsonErrorEnum || (exports.Hsmgr401ApplicationJsonErrorEnum = {}));
var Hsmgr401ApplicationJsonErrorDescriptionEnum;
(function (Hsmgr401ApplicationJsonErrorDescriptionEnum) {
    Hsmgr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Hsmgr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Hsmgr401ApplicationJsonErrorDescriptionEnum = exports.Hsmgr401ApplicationJsonErrorDescriptionEnum || (exports.Hsmgr401ApplicationJsonErrorDescriptionEnum = {}));
var Hsmgr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Hsmgr401ApplicationJson, _super);
    function Hsmgr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hsmgr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hsmgr401ApplicationJson.prototype, "errorDescription", void 0);
    return Hsmgr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hsmgr401ApplicationJson = Hsmgr401ApplicationJson;
var Hsmgr404ApplicationJsonErrorEnum;
(function (Hsmgr404ApplicationJsonErrorEnum) {
    Hsmgr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Hsmgr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Hsmgr404ApplicationJsonErrorEnum = exports.Hsmgr404ApplicationJsonErrorEnum || (exports.Hsmgr404ApplicationJsonErrorEnum = {}));
var Hsmgr404ApplicationJsonErrorDescriptionEnum;
(function (Hsmgr404ApplicationJsonErrorDescriptionEnum) {
    Hsmgr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Hsmgr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Hsmgr404ApplicationJsonErrorDescriptionEnum = exports.Hsmgr404ApplicationJsonErrorDescriptionEnum || (exports.Hsmgr404ApplicationJsonErrorDescriptionEnum = {}));
var Hsmgr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Hsmgr404ApplicationJson, _super);
    function Hsmgr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hsmgr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hsmgr404ApplicationJson.prototype, "errorDescription", void 0);
    return Hsmgr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hsmgr404ApplicationJson = Hsmgr404ApplicationJson;
var Hsmgr500ApplicationJsonErrorEnum;
(function (Hsmgr500ApplicationJsonErrorEnum) {
    Hsmgr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Hsmgr500ApplicationJsonErrorEnum = exports.Hsmgr500ApplicationJsonErrorEnum || (exports.Hsmgr500ApplicationJsonErrorEnum = {}));
var Hsmgr500ApplicationJsonErrorDescriptionEnum;
(function (Hsmgr500ApplicationJsonErrorDescriptionEnum) {
    Hsmgr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Hsmgr500ApplicationJsonErrorDescriptionEnum = exports.Hsmgr500ApplicationJsonErrorDescriptionEnum || (exports.Hsmgr500ApplicationJsonErrorDescriptionEnum = {}));
var Hsmgr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Hsmgr500ApplicationJson, _super);
    function Hsmgr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hsmgr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hsmgr500ApplicationJson.prototype, "errorDescription", void 0);
    return Hsmgr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hsmgr500ApplicationJson = Hsmgr500ApplicationJson;
var Hsmgr502ApplicationJsonErrorEnum;
(function (Hsmgr502ApplicationJsonErrorEnum) {
    Hsmgr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Hsmgr502ApplicationJsonErrorEnum = exports.Hsmgr502ApplicationJsonErrorEnum || (exports.Hsmgr502ApplicationJsonErrorEnum = {}));
var Hsmgr502ApplicationJsonErrorDescriptionEnum;
(function (Hsmgr502ApplicationJsonErrorDescriptionEnum) {
    Hsmgr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Hsmgr502ApplicationJsonErrorDescriptionEnum = exports.Hsmgr502ApplicationJsonErrorDescriptionEnum || (exports.Hsmgr502ApplicationJsonErrorDescriptionEnum = {}));
var Hsmgr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Hsmgr502ApplicationJson, _super);
    function Hsmgr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hsmgr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hsmgr502ApplicationJson.prototype, "errorDescription", void 0);
    return Hsmgr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hsmgr502ApplicationJson = Hsmgr502ApplicationJson;
var Hsmgr503ApplicationJsonErrorEnum;
(function (Hsmgr503ApplicationJsonErrorEnum) {
    Hsmgr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Hsmgr503ApplicationJsonErrorEnum = exports.Hsmgr503ApplicationJsonErrorEnum || (exports.Hsmgr503ApplicationJsonErrorEnum = {}));
var Hsmgr503ApplicationJsonErrorDescriptionEnum;
(function (Hsmgr503ApplicationJsonErrorDescriptionEnum) {
    Hsmgr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Hsmgr503ApplicationJsonErrorDescriptionEnum = exports.Hsmgr503ApplicationJsonErrorDescriptionEnum || (exports.Hsmgr503ApplicationJsonErrorDescriptionEnum = {}));
var Hsmgr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Hsmgr503ApplicationJson, _super);
    function Hsmgr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hsmgr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hsmgr503ApplicationJson.prototype, "errorDescription", void 0);
    return Hsmgr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hsmgr503ApplicationJson = Hsmgr503ApplicationJson;
var Hsmgr504ApplicationJsonErrorEnum;
(function (Hsmgr504ApplicationJsonErrorEnum) {
    Hsmgr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Hsmgr504ApplicationJsonErrorEnum = exports.Hsmgr504ApplicationJsonErrorEnum || (exports.Hsmgr504ApplicationJsonErrorEnum = {}));
var Hsmgr504ApplicationJsonErrorDescriptionEnum;
(function (Hsmgr504ApplicationJsonErrorDescriptionEnum) {
    Hsmgr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Hsmgr504ApplicationJsonErrorDescriptionEnum = exports.Hsmgr504ApplicationJsonErrorDescriptionEnum || (exports.Hsmgr504ApplicationJsonErrorDescriptionEnum = {}));
var Hsmgr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Hsmgr504ApplicationJson, _super);
    function Hsmgr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Hsmgr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Hsmgr504ApplicationJson.prototype, "errorDescription", void 0);
    return Hsmgr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Hsmgr504ApplicationJson = Hsmgr504ApplicationJson;
var HsmgrRequest = /** @class */ (function (_super) {
    __extends(HsmgrRequest, _super);
    function HsmgrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", HsmgrRequestBody)
    ], HsmgrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", HsmgrSecurity)
    ], HsmgrRequest.prototype, "security", void 0);
    return HsmgrRequest;
}(utils_1.SpeakeasyBase));
exports.HsmgrRequest = HsmgrRequest;
var HsmgrResponse = /** @class */ (function (_super) {
    __extends(HsmgrResponse, _super);
    function HsmgrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], HsmgrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], HsmgrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hsmgr400ApplicationJson)
    ], HsmgrResponse.prototype, "hsmgr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hsmgr401ApplicationJson)
    ], HsmgrResponse.prototype, "hsmgr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hsmgr404ApplicationJson)
    ], HsmgrResponse.prototype, "hsmgr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hsmgr500ApplicationJson)
    ], HsmgrResponse.prototype, "hsmgr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hsmgr502ApplicationJson)
    ], HsmgrResponse.prototype, "hsmgr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hsmgr503ApplicationJson)
    ], HsmgrResponse.prototype, "hsmgr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Hsmgr504ApplicationJson)
    ], HsmgrResponse.prototype, "hsmgr504ApplicationJSONObject", void 0);
    return HsmgrResponse;
}(utils_1.SpeakeasyBase));
exports.HsmgrResponse = HsmgrResponse;
