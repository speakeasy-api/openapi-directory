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
exports.NrcerResponse = exports.NrcerRequest = exports.Nrcer504ApplicationJson = exports.Nrcer504ApplicationJsonErrorDescriptionEnum = exports.Nrcer504ApplicationJsonErrorEnum = exports.Nrcer503ApplicationJson = exports.Nrcer503ApplicationJsonErrorDescriptionEnum = exports.Nrcer503ApplicationJsonErrorEnum = exports.Nrcer502ApplicationJson = exports.Nrcer502ApplicationJsonErrorDescriptionEnum = exports.Nrcer502ApplicationJsonErrorEnum = exports.Nrcer500ApplicationJson = exports.Nrcer500ApplicationJsonErrorDescriptionEnum = exports.Nrcer500ApplicationJsonErrorEnum = exports.Nrcer404ApplicationJson = exports.Nrcer404ApplicationJsonErrorDescriptionEnum = exports.Nrcer404ApplicationJsonErrorEnum = exports.Nrcer401ApplicationJson = exports.Nrcer401ApplicationJsonErrorDescriptionEnum = exports.Nrcer401ApplicationJsonErrorEnum = exports.Nrcer400ApplicationJson = exports.Nrcer400ApplicationJsonErrorDescriptionEnum = exports.Nrcer400ApplicationJsonErrorEnum = exports.NrcerSecurity = exports.NrcerRequestBody = exports.NrcerRequestBodyFormatEnum = exports.NrcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NrcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(NrcerRequestBodyCertificateParameters, _super);
    function NrcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], NrcerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], NrcerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], NrcerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return NrcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.NrcerRequestBodyCertificateParameters = NrcerRequestBodyCertificateParameters;
var NrcerRequestBodyFormatEnum;
(function (NrcerRequestBodyFormatEnum) {
    NrcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(NrcerRequestBodyFormatEnum = exports.NrcerRequestBodyFormatEnum || (exports.NrcerRequestBodyFormatEnum = {}));
var NrcerRequestBody = /** @class */ (function (_super) {
    __extends(NrcerRequestBody, _super);
    function NrcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", NrcerRequestBodyCertificateParameters)
    ], NrcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], NrcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], NrcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], NrcerRequestBody.prototype, "txnId", void 0);
    return NrcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.NrcerRequestBody = NrcerRequestBody;
var NrcerSecurity = /** @class */ (function (_super) {
    __extends(NrcerSecurity, _super);
    function NrcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], NrcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], NrcerSecurity.prototype, "clientId", void 0);
    return NrcerSecurity;
}(utils_1.SpeakeasyBase));
exports.NrcerSecurity = NrcerSecurity;
var Nrcer400ApplicationJsonErrorEnum;
(function (Nrcer400ApplicationJsonErrorEnum) {
    Nrcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Nrcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Nrcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Nrcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Nrcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Nrcer400ApplicationJsonErrorEnum = exports.Nrcer400ApplicationJsonErrorEnum || (exports.Nrcer400ApplicationJsonErrorEnum = {}));
var Nrcer400ApplicationJsonErrorDescriptionEnum;
(function (Nrcer400ApplicationJsonErrorDescriptionEnum) {
    Nrcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Nrcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Nrcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Nrcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Nrcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Nrcer400ApplicationJsonErrorDescriptionEnum = exports.Nrcer400ApplicationJsonErrorDescriptionEnum || (exports.Nrcer400ApplicationJsonErrorDescriptionEnum = {}));
var Nrcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Nrcer400ApplicationJson, _super);
    function Nrcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nrcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nrcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Nrcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nrcer400ApplicationJson = Nrcer400ApplicationJson;
var Nrcer401ApplicationJsonErrorEnum;
(function (Nrcer401ApplicationJsonErrorEnum) {
    Nrcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Nrcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Nrcer401ApplicationJsonErrorEnum = exports.Nrcer401ApplicationJsonErrorEnum || (exports.Nrcer401ApplicationJsonErrorEnum = {}));
var Nrcer401ApplicationJsonErrorDescriptionEnum;
(function (Nrcer401ApplicationJsonErrorDescriptionEnum) {
    Nrcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Nrcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Nrcer401ApplicationJsonErrorDescriptionEnum = exports.Nrcer401ApplicationJsonErrorDescriptionEnum || (exports.Nrcer401ApplicationJsonErrorDescriptionEnum = {}));
var Nrcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Nrcer401ApplicationJson, _super);
    function Nrcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nrcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nrcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Nrcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nrcer401ApplicationJson = Nrcer401ApplicationJson;
var Nrcer404ApplicationJsonErrorEnum;
(function (Nrcer404ApplicationJsonErrorEnum) {
    Nrcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Nrcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Nrcer404ApplicationJsonErrorEnum = exports.Nrcer404ApplicationJsonErrorEnum || (exports.Nrcer404ApplicationJsonErrorEnum = {}));
var Nrcer404ApplicationJsonErrorDescriptionEnum;
(function (Nrcer404ApplicationJsonErrorDescriptionEnum) {
    Nrcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Nrcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Nrcer404ApplicationJsonErrorDescriptionEnum = exports.Nrcer404ApplicationJsonErrorDescriptionEnum || (exports.Nrcer404ApplicationJsonErrorDescriptionEnum = {}));
var Nrcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Nrcer404ApplicationJson, _super);
    function Nrcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nrcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nrcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Nrcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nrcer404ApplicationJson = Nrcer404ApplicationJson;
var Nrcer500ApplicationJsonErrorEnum;
(function (Nrcer500ApplicationJsonErrorEnum) {
    Nrcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Nrcer500ApplicationJsonErrorEnum = exports.Nrcer500ApplicationJsonErrorEnum || (exports.Nrcer500ApplicationJsonErrorEnum = {}));
var Nrcer500ApplicationJsonErrorDescriptionEnum;
(function (Nrcer500ApplicationJsonErrorDescriptionEnum) {
    Nrcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Nrcer500ApplicationJsonErrorDescriptionEnum = exports.Nrcer500ApplicationJsonErrorDescriptionEnum || (exports.Nrcer500ApplicationJsonErrorDescriptionEnum = {}));
var Nrcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Nrcer500ApplicationJson, _super);
    function Nrcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nrcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nrcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Nrcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nrcer500ApplicationJson = Nrcer500ApplicationJson;
var Nrcer502ApplicationJsonErrorEnum;
(function (Nrcer502ApplicationJsonErrorEnum) {
    Nrcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Nrcer502ApplicationJsonErrorEnum = exports.Nrcer502ApplicationJsonErrorEnum || (exports.Nrcer502ApplicationJsonErrorEnum = {}));
var Nrcer502ApplicationJsonErrorDescriptionEnum;
(function (Nrcer502ApplicationJsonErrorDescriptionEnum) {
    Nrcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Nrcer502ApplicationJsonErrorDescriptionEnum = exports.Nrcer502ApplicationJsonErrorDescriptionEnum || (exports.Nrcer502ApplicationJsonErrorDescriptionEnum = {}));
var Nrcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Nrcer502ApplicationJson, _super);
    function Nrcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nrcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nrcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Nrcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nrcer502ApplicationJson = Nrcer502ApplicationJson;
var Nrcer503ApplicationJsonErrorEnum;
(function (Nrcer503ApplicationJsonErrorEnum) {
    Nrcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Nrcer503ApplicationJsonErrorEnum = exports.Nrcer503ApplicationJsonErrorEnum || (exports.Nrcer503ApplicationJsonErrorEnum = {}));
var Nrcer503ApplicationJsonErrorDescriptionEnum;
(function (Nrcer503ApplicationJsonErrorDescriptionEnum) {
    Nrcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Nrcer503ApplicationJsonErrorDescriptionEnum = exports.Nrcer503ApplicationJsonErrorDescriptionEnum || (exports.Nrcer503ApplicationJsonErrorDescriptionEnum = {}));
var Nrcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Nrcer503ApplicationJson, _super);
    function Nrcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nrcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nrcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Nrcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nrcer503ApplicationJson = Nrcer503ApplicationJson;
var Nrcer504ApplicationJsonErrorEnum;
(function (Nrcer504ApplicationJsonErrorEnum) {
    Nrcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Nrcer504ApplicationJsonErrorEnum = exports.Nrcer504ApplicationJsonErrorEnum || (exports.Nrcer504ApplicationJsonErrorEnum = {}));
var Nrcer504ApplicationJsonErrorDescriptionEnum;
(function (Nrcer504ApplicationJsonErrorDescriptionEnum) {
    Nrcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Nrcer504ApplicationJsonErrorDescriptionEnum = exports.Nrcer504ApplicationJsonErrorDescriptionEnum || (exports.Nrcer504ApplicationJsonErrorDescriptionEnum = {}));
var Nrcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Nrcer504ApplicationJson, _super);
    function Nrcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Nrcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Nrcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Nrcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Nrcer504ApplicationJson = Nrcer504ApplicationJson;
var NrcerRequest = /** @class */ (function (_super) {
    __extends(NrcerRequest, _super);
    function NrcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", NrcerRequestBody)
    ], NrcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NrcerSecurity)
    ], NrcerRequest.prototype, "security", void 0);
    return NrcerRequest;
}(utils_1.SpeakeasyBase));
exports.NrcerRequest = NrcerRequest;
var NrcerResponse = /** @class */ (function (_super) {
    __extends(NrcerResponse, _super);
    function NrcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NrcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NrcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nrcer400ApplicationJson)
    ], NrcerResponse.prototype, "nrcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nrcer401ApplicationJson)
    ], NrcerResponse.prototype, "nrcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nrcer404ApplicationJson)
    ], NrcerResponse.prototype, "nrcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nrcer500ApplicationJson)
    ], NrcerResponse.prototype, "nrcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nrcer502ApplicationJson)
    ], NrcerResponse.prototype, "nrcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nrcer503ApplicationJson)
    ], NrcerResponse.prototype, "nrcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Nrcer504ApplicationJson)
    ], NrcerResponse.prototype, "nrcer504ApplicationJSONObject", void 0);
    return NrcerResponse;
}(utils_1.SpeakeasyBase));
exports.NrcerResponse = NrcerResponse;
