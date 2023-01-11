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
exports.PancrResponse = exports.PancrRequest = exports.Pancr504ApplicationJson = exports.Pancr504ApplicationJsonErrorDescriptionEnum = exports.Pancr504ApplicationJsonErrorEnum = exports.Pancr503ApplicationJson = exports.Pancr503ApplicationJsonErrorDescriptionEnum = exports.Pancr503ApplicationJsonErrorEnum = exports.Pancr502ApplicationJson = exports.Pancr502ApplicationJsonErrorDescriptionEnum = exports.Pancr502ApplicationJsonErrorEnum = exports.Pancr500ApplicationJson = exports.Pancr500ApplicationJsonErrorDescriptionEnum = exports.Pancr500ApplicationJsonErrorEnum = exports.Pancr404ApplicationJson = exports.Pancr404ApplicationJsonErrorDescriptionEnum = exports.Pancr404ApplicationJsonErrorEnum = exports.Pancr401ApplicationJson = exports.Pancr401ApplicationJsonErrorDescriptionEnum = exports.Pancr401ApplicationJsonErrorEnum = exports.Pancr400ApplicationJson = exports.Pancr400ApplicationJsonErrorDescriptionEnum = exports.Pancr400ApplicationJsonErrorEnum = exports.PancrSecurity = exports.PancrRequestBody = exports.PancrRequestBodyFormatEnum = exports.PancrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PancrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(PancrRequestBodyCertificateParameters, _super);
    function PancrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], PancrRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], PancrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GENDER" }),
        __metadata("design:type", String)
    ], PancrRequestBodyCertificateParameters.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PANFullName" }),
        __metadata("design:type", String)
    ], PancrRequestBodyCertificateParameters.prototype, "panFullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], PancrRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=panno" }),
        __metadata("design:type", String)
    ], PancrRequestBodyCertificateParameters.prototype, "panno", void 0);
    return PancrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.PancrRequestBodyCertificateParameters = PancrRequestBodyCertificateParameters;
var PancrRequestBodyFormatEnum;
(function (PancrRequestBodyFormatEnum) {
    PancrRequestBodyFormatEnum["Xml"] = "xml";
    PancrRequestBodyFormatEnum["Pdf"] = "pdf";
})(PancrRequestBodyFormatEnum = exports.PancrRequestBodyFormatEnum || (exports.PancrRequestBodyFormatEnum = {}));
var PancrRequestBody = /** @class */ (function (_super) {
    __extends(PancrRequestBody, _super);
    function PancrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", PancrRequestBodyCertificateParameters)
    ], PancrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], PancrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PancrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], PancrRequestBody.prototype, "txnId", void 0);
    return PancrRequestBody;
}(utils_1.SpeakeasyBase));
exports.PancrRequestBody = PancrRequestBody;
var PancrSecurity = /** @class */ (function (_super) {
    __extends(PancrSecurity, _super);
    function PancrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PancrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], PancrSecurity.prototype, "clientId", void 0);
    return PancrSecurity;
}(utils_1.SpeakeasyBase));
exports.PancrSecurity = PancrSecurity;
var Pancr400ApplicationJsonErrorEnum;
(function (Pancr400ApplicationJsonErrorEnum) {
    Pancr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Pancr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Pancr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Pancr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Pancr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Pancr400ApplicationJsonErrorEnum = exports.Pancr400ApplicationJsonErrorEnum || (exports.Pancr400ApplicationJsonErrorEnum = {}));
var Pancr400ApplicationJsonErrorDescriptionEnum;
(function (Pancr400ApplicationJsonErrorDescriptionEnum) {
    Pancr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Pancr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Pancr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Pancr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Pancr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Pancr400ApplicationJsonErrorDescriptionEnum = exports.Pancr400ApplicationJsonErrorDescriptionEnum || (exports.Pancr400ApplicationJsonErrorDescriptionEnum = {}));
var Pancr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Pancr400ApplicationJson, _super);
    function Pancr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pancr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pancr400ApplicationJson.prototype, "errorDescription", void 0);
    return Pancr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pancr400ApplicationJson = Pancr400ApplicationJson;
var Pancr401ApplicationJsonErrorEnum;
(function (Pancr401ApplicationJsonErrorEnum) {
    Pancr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Pancr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Pancr401ApplicationJsonErrorEnum = exports.Pancr401ApplicationJsonErrorEnum || (exports.Pancr401ApplicationJsonErrorEnum = {}));
var Pancr401ApplicationJsonErrorDescriptionEnum;
(function (Pancr401ApplicationJsonErrorDescriptionEnum) {
    Pancr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Pancr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Pancr401ApplicationJsonErrorDescriptionEnum = exports.Pancr401ApplicationJsonErrorDescriptionEnum || (exports.Pancr401ApplicationJsonErrorDescriptionEnum = {}));
var Pancr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Pancr401ApplicationJson, _super);
    function Pancr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pancr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pancr401ApplicationJson.prototype, "errorDescription", void 0);
    return Pancr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pancr401ApplicationJson = Pancr401ApplicationJson;
var Pancr404ApplicationJsonErrorEnum;
(function (Pancr404ApplicationJsonErrorEnum) {
    Pancr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Pancr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Pancr404ApplicationJsonErrorEnum = exports.Pancr404ApplicationJsonErrorEnum || (exports.Pancr404ApplicationJsonErrorEnum = {}));
var Pancr404ApplicationJsonErrorDescriptionEnum;
(function (Pancr404ApplicationJsonErrorDescriptionEnum) {
    Pancr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Pancr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Pancr404ApplicationJsonErrorDescriptionEnum = exports.Pancr404ApplicationJsonErrorDescriptionEnum || (exports.Pancr404ApplicationJsonErrorDescriptionEnum = {}));
var Pancr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Pancr404ApplicationJson, _super);
    function Pancr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pancr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pancr404ApplicationJson.prototype, "errorDescription", void 0);
    return Pancr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pancr404ApplicationJson = Pancr404ApplicationJson;
var Pancr500ApplicationJsonErrorEnum;
(function (Pancr500ApplicationJsonErrorEnum) {
    Pancr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Pancr500ApplicationJsonErrorEnum = exports.Pancr500ApplicationJsonErrorEnum || (exports.Pancr500ApplicationJsonErrorEnum = {}));
var Pancr500ApplicationJsonErrorDescriptionEnum;
(function (Pancr500ApplicationJsonErrorDescriptionEnum) {
    Pancr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Pancr500ApplicationJsonErrorDescriptionEnum = exports.Pancr500ApplicationJsonErrorDescriptionEnum || (exports.Pancr500ApplicationJsonErrorDescriptionEnum = {}));
var Pancr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Pancr500ApplicationJson, _super);
    function Pancr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pancr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pancr500ApplicationJson.prototype, "errorDescription", void 0);
    return Pancr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pancr500ApplicationJson = Pancr500ApplicationJson;
var Pancr502ApplicationJsonErrorEnum;
(function (Pancr502ApplicationJsonErrorEnum) {
    Pancr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Pancr502ApplicationJsonErrorEnum = exports.Pancr502ApplicationJsonErrorEnum || (exports.Pancr502ApplicationJsonErrorEnum = {}));
var Pancr502ApplicationJsonErrorDescriptionEnum;
(function (Pancr502ApplicationJsonErrorDescriptionEnum) {
    Pancr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Pancr502ApplicationJsonErrorDescriptionEnum = exports.Pancr502ApplicationJsonErrorDescriptionEnum || (exports.Pancr502ApplicationJsonErrorDescriptionEnum = {}));
var Pancr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Pancr502ApplicationJson, _super);
    function Pancr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pancr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pancr502ApplicationJson.prototype, "errorDescription", void 0);
    return Pancr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pancr502ApplicationJson = Pancr502ApplicationJson;
var Pancr503ApplicationJsonErrorEnum;
(function (Pancr503ApplicationJsonErrorEnum) {
    Pancr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Pancr503ApplicationJsonErrorEnum = exports.Pancr503ApplicationJsonErrorEnum || (exports.Pancr503ApplicationJsonErrorEnum = {}));
var Pancr503ApplicationJsonErrorDescriptionEnum;
(function (Pancr503ApplicationJsonErrorDescriptionEnum) {
    Pancr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Pancr503ApplicationJsonErrorDescriptionEnum = exports.Pancr503ApplicationJsonErrorDescriptionEnum || (exports.Pancr503ApplicationJsonErrorDescriptionEnum = {}));
var Pancr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Pancr503ApplicationJson, _super);
    function Pancr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pancr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pancr503ApplicationJson.prototype, "errorDescription", void 0);
    return Pancr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pancr503ApplicationJson = Pancr503ApplicationJson;
var Pancr504ApplicationJsonErrorEnum;
(function (Pancr504ApplicationJsonErrorEnum) {
    Pancr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Pancr504ApplicationJsonErrorEnum = exports.Pancr504ApplicationJsonErrorEnum || (exports.Pancr504ApplicationJsonErrorEnum = {}));
var Pancr504ApplicationJsonErrorDescriptionEnum;
(function (Pancr504ApplicationJsonErrorDescriptionEnum) {
    Pancr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Pancr504ApplicationJsonErrorDescriptionEnum = exports.Pancr504ApplicationJsonErrorDescriptionEnum || (exports.Pancr504ApplicationJsonErrorDescriptionEnum = {}));
var Pancr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Pancr504ApplicationJson, _super);
    function Pancr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Pancr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Pancr504ApplicationJson.prototype, "errorDescription", void 0);
    return Pancr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Pancr504ApplicationJson = Pancr504ApplicationJson;
var PancrRequest = /** @class */ (function (_super) {
    __extends(PancrRequest, _super);
    function PancrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PancrRequestBody)
    ], PancrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PancrSecurity)
    ], PancrRequest.prototype, "security", void 0);
    return PancrRequest;
}(utils_1.SpeakeasyBase));
exports.PancrRequest = PancrRequest;
var PancrResponse = /** @class */ (function (_super) {
    __extends(PancrResponse, _super);
    function PancrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PancrResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PancrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PancrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pancr400ApplicationJson)
    ], PancrResponse.prototype, "pancr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pancr401ApplicationJson)
    ], PancrResponse.prototype, "pancr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pancr404ApplicationJson)
    ], PancrResponse.prototype, "pancr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pancr500ApplicationJson)
    ], PancrResponse.prototype, "pancr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pancr502ApplicationJson)
    ], PancrResponse.prototype, "pancr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pancr503ApplicationJson)
    ], PancrResponse.prototype, "pancr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Pancr504ApplicationJson)
    ], PancrResponse.prototype, "pancr504ApplicationJSONObject", void 0);
    return PancrResponse;
}(utils_1.SpeakeasyBase));
exports.PancrResponse = PancrResponse;
