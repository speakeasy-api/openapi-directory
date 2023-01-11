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
exports.DrvlcResponse = exports.DrvlcRequest = exports.Drvlc504ApplicationJson = exports.Drvlc504ApplicationJsonErrorDescriptionEnum = exports.Drvlc504ApplicationJsonErrorEnum = exports.Drvlc503ApplicationJson = exports.Drvlc503ApplicationJsonErrorDescriptionEnum = exports.Drvlc503ApplicationJsonErrorEnum = exports.Drvlc502ApplicationJson = exports.Drvlc502ApplicationJsonErrorDescriptionEnum = exports.Drvlc502ApplicationJsonErrorEnum = exports.Drvlc500ApplicationJson = exports.Drvlc500ApplicationJsonErrorDescriptionEnum = exports.Drvlc500ApplicationJsonErrorEnum = exports.Drvlc404ApplicationJson = exports.Drvlc404ApplicationJsonErrorDescriptionEnum = exports.Drvlc404ApplicationJsonErrorEnum = exports.Drvlc401ApplicationJson = exports.Drvlc401ApplicationJsonErrorDescriptionEnum = exports.Drvlc401ApplicationJsonErrorEnum = exports.Drvlc400ApplicationJson = exports.Drvlc400ApplicationJsonErrorDescriptionEnum = exports.Drvlc400ApplicationJsonErrorEnum = exports.DrvlcSecurity = exports.DrvlcRequestBody = exports.DrvlcRequestBodyFormatEnum = exports.DrvlcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DrvlcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DrvlcRequestBodyCertificateParameters, _super);
    function DrvlcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DOB" }),
        __metadata("design:type", String)
    ], DrvlcRequestBodyCertificateParameters.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], DrvlcRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dlno" }),
        __metadata("design:type", String)
    ], DrvlcRequestBodyCertificateParameters.prototype, "dlno", void 0);
    return DrvlcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DrvlcRequestBodyCertificateParameters = DrvlcRequestBodyCertificateParameters;
var DrvlcRequestBodyFormatEnum;
(function (DrvlcRequestBodyFormatEnum) {
    DrvlcRequestBodyFormatEnum["Xml"] = "xml";
    DrvlcRequestBodyFormatEnum["Pdf"] = "pdf";
})(DrvlcRequestBodyFormatEnum = exports.DrvlcRequestBodyFormatEnum || (exports.DrvlcRequestBodyFormatEnum = {}));
var DrvlcRequestBody = /** @class */ (function (_super) {
    __extends(DrvlcRequestBody, _super);
    function DrvlcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DrvlcRequestBodyCertificateParameters)
    ], DrvlcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DrvlcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DrvlcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DrvlcRequestBody.prototype, "txnId", void 0);
    return DrvlcRequestBody;
}(utils_1.SpeakeasyBase));
exports.DrvlcRequestBody = DrvlcRequestBody;
var DrvlcSecurity = /** @class */ (function (_super) {
    __extends(DrvlcSecurity, _super);
    function DrvlcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DrvlcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DrvlcSecurity.prototype, "clientId", void 0);
    return DrvlcSecurity;
}(utils_1.SpeakeasyBase));
exports.DrvlcSecurity = DrvlcSecurity;
var Drvlc400ApplicationJsonErrorEnum;
(function (Drvlc400ApplicationJsonErrorEnum) {
    Drvlc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Drvlc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Drvlc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Drvlc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Drvlc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Drvlc400ApplicationJsonErrorEnum = exports.Drvlc400ApplicationJsonErrorEnum || (exports.Drvlc400ApplicationJsonErrorEnum = {}));
var Drvlc400ApplicationJsonErrorDescriptionEnum;
(function (Drvlc400ApplicationJsonErrorDescriptionEnum) {
    Drvlc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Drvlc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Drvlc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Drvlc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Drvlc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Drvlc400ApplicationJsonErrorDescriptionEnum = exports.Drvlc400ApplicationJsonErrorDescriptionEnum || (exports.Drvlc400ApplicationJsonErrorDescriptionEnum = {}));
var Drvlc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Drvlc400ApplicationJson, _super);
    function Drvlc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Drvlc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Drvlc400ApplicationJson.prototype, "errorDescription", void 0);
    return Drvlc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Drvlc400ApplicationJson = Drvlc400ApplicationJson;
var Drvlc401ApplicationJsonErrorEnum;
(function (Drvlc401ApplicationJsonErrorEnum) {
    Drvlc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Drvlc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Drvlc401ApplicationJsonErrorEnum = exports.Drvlc401ApplicationJsonErrorEnum || (exports.Drvlc401ApplicationJsonErrorEnum = {}));
var Drvlc401ApplicationJsonErrorDescriptionEnum;
(function (Drvlc401ApplicationJsonErrorDescriptionEnum) {
    Drvlc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Drvlc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Drvlc401ApplicationJsonErrorDescriptionEnum = exports.Drvlc401ApplicationJsonErrorDescriptionEnum || (exports.Drvlc401ApplicationJsonErrorDescriptionEnum = {}));
var Drvlc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Drvlc401ApplicationJson, _super);
    function Drvlc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Drvlc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Drvlc401ApplicationJson.prototype, "errorDescription", void 0);
    return Drvlc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Drvlc401ApplicationJson = Drvlc401ApplicationJson;
var Drvlc404ApplicationJsonErrorEnum;
(function (Drvlc404ApplicationJsonErrorEnum) {
    Drvlc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Drvlc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Drvlc404ApplicationJsonErrorEnum = exports.Drvlc404ApplicationJsonErrorEnum || (exports.Drvlc404ApplicationJsonErrorEnum = {}));
var Drvlc404ApplicationJsonErrorDescriptionEnum;
(function (Drvlc404ApplicationJsonErrorDescriptionEnum) {
    Drvlc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Drvlc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Drvlc404ApplicationJsonErrorDescriptionEnum = exports.Drvlc404ApplicationJsonErrorDescriptionEnum || (exports.Drvlc404ApplicationJsonErrorDescriptionEnum = {}));
var Drvlc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Drvlc404ApplicationJson, _super);
    function Drvlc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Drvlc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Drvlc404ApplicationJson.prototype, "errorDescription", void 0);
    return Drvlc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Drvlc404ApplicationJson = Drvlc404ApplicationJson;
var Drvlc500ApplicationJsonErrorEnum;
(function (Drvlc500ApplicationJsonErrorEnum) {
    Drvlc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Drvlc500ApplicationJsonErrorEnum = exports.Drvlc500ApplicationJsonErrorEnum || (exports.Drvlc500ApplicationJsonErrorEnum = {}));
var Drvlc500ApplicationJsonErrorDescriptionEnum;
(function (Drvlc500ApplicationJsonErrorDescriptionEnum) {
    Drvlc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Drvlc500ApplicationJsonErrorDescriptionEnum = exports.Drvlc500ApplicationJsonErrorDescriptionEnum || (exports.Drvlc500ApplicationJsonErrorDescriptionEnum = {}));
var Drvlc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Drvlc500ApplicationJson, _super);
    function Drvlc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Drvlc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Drvlc500ApplicationJson.prototype, "errorDescription", void 0);
    return Drvlc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Drvlc500ApplicationJson = Drvlc500ApplicationJson;
var Drvlc502ApplicationJsonErrorEnum;
(function (Drvlc502ApplicationJsonErrorEnum) {
    Drvlc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Drvlc502ApplicationJsonErrorEnum = exports.Drvlc502ApplicationJsonErrorEnum || (exports.Drvlc502ApplicationJsonErrorEnum = {}));
var Drvlc502ApplicationJsonErrorDescriptionEnum;
(function (Drvlc502ApplicationJsonErrorDescriptionEnum) {
    Drvlc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Drvlc502ApplicationJsonErrorDescriptionEnum = exports.Drvlc502ApplicationJsonErrorDescriptionEnum || (exports.Drvlc502ApplicationJsonErrorDescriptionEnum = {}));
var Drvlc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Drvlc502ApplicationJson, _super);
    function Drvlc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Drvlc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Drvlc502ApplicationJson.prototype, "errorDescription", void 0);
    return Drvlc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Drvlc502ApplicationJson = Drvlc502ApplicationJson;
var Drvlc503ApplicationJsonErrorEnum;
(function (Drvlc503ApplicationJsonErrorEnum) {
    Drvlc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Drvlc503ApplicationJsonErrorEnum = exports.Drvlc503ApplicationJsonErrorEnum || (exports.Drvlc503ApplicationJsonErrorEnum = {}));
var Drvlc503ApplicationJsonErrorDescriptionEnum;
(function (Drvlc503ApplicationJsonErrorDescriptionEnum) {
    Drvlc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Drvlc503ApplicationJsonErrorDescriptionEnum = exports.Drvlc503ApplicationJsonErrorDescriptionEnum || (exports.Drvlc503ApplicationJsonErrorDescriptionEnum = {}));
var Drvlc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Drvlc503ApplicationJson, _super);
    function Drvlc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Drvlc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Drvlc503ApplicationJson.prototype, "errorDescription", void 0);
    return Drvlc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Drvlc503ApplicationJson = Drvlc503ApplicationJson;
var Drvlc504ApplicationJsonErrorEnum;
(function (Drvlc504ApplicationJsonErrorEnum) {
    Drvlc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Drvlc504ApplicationJsonErrorEnum = exports.Drvlc504ApplicationJsonErrorEnum || (exports.Drvlc504ApplicationJsonErrorEnum = {}));
var Drvlc504ApplicationJsonErrorDescriptionEnum;
(function (Drvlc504ApplicationJsonErrorDescriptionEnum) {
    Drvlc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Drvlc504ApplicationJsonErrorDescriptionEnum = exports.Drvlc504ApplicationJsonErrorDescriptionEnum || (exports.Drvlc504ApplicationJsonErrorDescriptionEnum = {}));
var Drvlc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Drvlc504ApplicationJson, _super);
    function Drvlc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Drvlc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Drvlc504ApplicationJson.prototype, "errorDescription", void 0);
    return Drvlc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Drvlc504ApplicationJson = Drvlc504ApplicationJson;
var DrvlcRequest = /** @class */ (function (_super) {
    __extends(DrvlcRequest, _super);
    function DrvlcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DrvlcRequestBody)
    ], DrvlcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DrvlcSecurity)
    ], DrvlcRequest.prototype, "security", void 0);
    return DrvlcRequest;
}(utils_1.SpeakeasyBase));
exports.DrvlcRequest = DrvlcRequest;
var DrvlcResponse = /** @class */ (function (_super) {
    __extends(DrvlcResponse, _super);
    function DrvlcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DrvlcResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DrvlcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DrvlcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Drvlc400ApplicationJson)
    ], DrvlcResponse.prototype, "drvlc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Drvlc401ApplicationJson)
    ], DrvlcResponse.prototype, "drvlc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Drvlc404ApplicationJson)
    ], DrvlcResponse.prototype, "drvlc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Drvlc500ApplicationJson)
    ], DrvlcResponse.prototype, "drvlc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Drvlc502ApplicationJson)
    ], DrvlcResponse.prototype, "drvlc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Drvlc503ApplicationJson)
    ], DrvlcResponse.prototype, "drvlc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Drvlc504ApplicationJson)
    ], DrvlcResponse.prototype, "drvlc504ApplicationJSONObject", void 0);
    return DrvlcResponse;
}(utils_1.SpeakeasyBase));
exports.DrvlcResponse = DrvlcResponse;
