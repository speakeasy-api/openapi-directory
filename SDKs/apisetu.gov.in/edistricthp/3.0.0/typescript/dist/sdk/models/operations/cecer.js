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
exports.CecerResponse = exports.CecerRequest = exports.Cecer504ApplicationJson = exports.Cecer504ApplicationJsonErrorDescriptionEnum = exports.Cecer504ApplicationJsonErrorEnum = exports.Cecer503ApplicationJson = exports.Cecer503ApplicationJsonErrorDescriptionEnum = exports.Cecer503ApplicationJsonErrorEnum = exports.Cecer502ApplicationJson = exports.Cecer502ApplicationJsonErrorDescriptionEnum = exports.Cecer502ApplicationJsonErrorEnum = exports.Cecer500ApplicationJson = exports.Cecer500ApplicationJsonErrorDescriptionEnum = exports.Cecer500ApplicationJsonErrorEnum = exports.Cecer404ApplicationJson = exports.Cecer404ApplicationJsonErrorDescriptionEnum = exports.Cecer404ApplicationJsonErrorEnum = exports.Cecer401ApplicationJson = exports.Cecer401ApplicationJsonErrorDescriptionEnum = exports.Cecer401ApplicationJsonErrorEnum = exports.Cecer400ApplicationJson = exports.Cecer400ApplicationJsonErrorDescriptionEnum = exports.Cecer400ApplicationJsonErrorEnum = exports.CecerSecurity = exports.CecerRequestBody = exports.CecerRequestBodyFormatEnum = exports.CecerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CecerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CecerRequestBodyCertificateParameters, _super);
    function CecerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UDF1" }),
        __metadata("design:type", String)
    ], CecerRequestBodyCertificateParameters.prototype, "udf1", void 0);
    return CecerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CecerRequestBodyCertificateParameters = CecerRequestBodyCertificateParameters;
var CecerRequestBodyFormatEnum;
(function (CecerRequestBodyFormatEnum) {
    CecerRequestBodyFormatEnum["Pdf"] = "pdf";
})(CecerRequestBodyFormatEnum = exports.CecerRequestBodyFormatEnum || (exports.CecerRequestBodyFormatEnum = {}));
var CecerRequestBody = /** @class */ (function (_super) {
    __extends(CecerRequestBody, _super);
    function CecerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CecerRequestBodyCertificateParameters)
    ], CecerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CecerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CecerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CecerRequestBody.prototype, "txnId", void 0);
    return CecerRequestBody;
}(utils_1.SpeakeasyBase));
exports.CecerRequestBody = CecerRequestBody;
var CecerSecurity = /** @class */ (function (_super) {
    __extends(CecerSecurity, _super);
    function CecerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CecerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CecerSecurity.prototype, "clientId", void 0);
    return CecerSecurity;
}(utils_1.SpeakeasyBase));
exports.CecerSecurity = CecerSecurity;
var Cecer400ApplicationJsonErrorEnum;
(function (Cecer400ApplicationJsonErrorEnum) {
    Cecer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cecer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cecer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cecer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cecer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cecer400ApplicationJsonErrorEnum = exports.Cecer400ApplicationJsonErrorEnum || (exports.Cecer400ApplicationJsonErrorEnum = {}));
var Cecer400ApplicationJsonErrorDescriptionEnum;
(function (Cecer400ApplicationJsonErrorDescriptionEnum) {
    Cecer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cecer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cecer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cecer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cecer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cecer400ApplicationJsonErrorDescriptionEnum = exports.Cecer400ApplicationJsonErrorDescriptionEnum || (exports.Cecer400ApplicationJsonErrorDescriptionEnum = {}));
var Cecer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer400ApplicationJson, _super);
    function Cecer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer400ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cecer400ApplicationJson = Cecer400ApplicationJson;
var Cecer401ApplicationJsonErrorEnum;
(function (Cecer401ApplicationJsonErrorEnum) {
    Cecer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cecer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cecer401ApplicationJsonErrorEnum = exports.Cecer401ApplicationJsonErrorEnum || (exports.Cecer401ApplicationJsonErrorEnum = {}));
var Cecer401ApplicationJsonErrorDescriptionEnum;
(function (Cecer401ApplicationJsonErrorDescriptionEnum) {
    Cecer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cecer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cecer401ApplicationJsonErrorDescriptionEnum = exports.Cecer401ApplicationJsonErrorDescriptionEnum || (exports.Cecer401ApplicationJsonErrorDescriptionEnum = {}));
var Cecer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer401ApplicationJson, _super);
    function Cecer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer401ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cecer401ApplicationJson = Cecer401ApplicationJson;
var Cecer404ApplicationJsonErrorEnum;
(function (Cecer404ApplicationJsonErrorEnum) {
    Cecer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cecer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cecer404ApplicationJsonErrorEnum = exports.Cecer404ApplicationJsonErrorEnum || (exports.Cecer404ApplicationJsonErrorEnum = {}));
var Cecer404ApplicationJsonErrorDescriptionEnum;
(function (Cecer404ApplicationJsonErrorDescriptionEnum) {
    Cecer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cecer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cecer404ApplicationJsonErrorDescriptionEnum = exports.Cecer404ApplicationJsonErrorDescriptionEnum || (exports.Cecer404ApplicationJsonErrorDescriptionEnum = {}));
var Cecer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer404ApplicationJson, _super);
    function Cecer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer404ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cecer404ApplicationJson = Cecer404ApplicationJson;
var Cecer500ApplicationJsonErrorEnum;
(function (Cecer500ApplicationJsonErrorEnum) {
    Cecer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cecer500ApplicationJsonErrorEnum = exports.Cecer500ApplicationJsonErrorEnum || (exports.Cecer500ApplicationJsonErrorEnum = {}));
var Cecer500ApplicationJsonErrorDescriptionEnum;
(function (Cecer500ApplicationJsonErrorDescriptionEnum) {
    Cecer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cecer500ApplicationJsonErrorDescriptionEnum = exports.Cecer500ApplicationJsonErrorDescriptionEnum || (exports.Cecer500ApplicationJsonErrorDescriptionEnum = {}));
var Cecer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer500ApplicationJson, _super);
    function Cecer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer500ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cecer500ApplicationJson = Cecer500ApplicationJson;
var Cecer502ApplicationJsonErrorEnum;
(function (Cecer502ApplicationJsonErrorEnum) {
    Cecer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cecer502ApplicationJsonErrorEnum = exports.Cecer502ApplicationJsonErrorEnum || (exports.Cecer502ApplicationJsonErrorEnum = {}));
var Cecer502ApplicationJsonErrorDescriptionEnum;
(function (Cecer502ApplicationJsonErrorDescriptionEnum) {
    Cecer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cecer502ApplicationJsonErrorDescriptionEnum = exports.Cecer502ApplicationJsonErrorDescriptionEnum || (exports.Cecer502ApplicationJsonErrorDescriptionEnum = {}));
var Cecer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer502ApplicationJson, _super);
    function Cecer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer502ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cecer502ApplicationJson = Cecer502ApplicationJson;
var Cecer503ApplicationJsonErrorEnum;
(function (Cecer503ApplicationJsonErrorEnum) {
    Cecer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cecer503ApplicationJsonErrorEnum = exports.Cecer503ApplicationJsonErrorEnum || (exports.Cecer503ApplicationJsonErrorEnum = {}));
var Cecer503ApplicationJsonErrorDescriptionEnum;
(function (Cecer503ApplicationJsonErrorDescriptionEnum) {
    Cecer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cecer503ApplicationJsonErrorDescriptionEnum = exports.Cecer503ApplicationJsonErrorDescriptionEnum || (exports.Cecer503ApplicationJsonErrorDescriptionEnum = {}));
var Cecer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer503ApplicationJson, _super);
    function Cecer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer503ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cecer503ApplicationJson = Cecer503ApplicationJson;
var Cecer504ApplicationJsonErrorEnum;
(function (Cecer504ApplicationJsonErrorEnum) {
    Cecer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cecer504ApplicationJsonErrorEnum = exports.Cecer504ApplicationJsonErrorEnum || (exports.Cecer504ApplicationJsonErrorEnum = {}));
var Cecer504ApplicationJsonErrorDescriptionEnum;
(function (Cecer504ApplicationJsonErrorDescriptionEnum) {
    Cecer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cecer504ApplicationJsonErrorDescriptionEnum = exports.Cecer504ApplicationJsonErrorDescriptionEnum || (exports.Cecer504ApplicationJsonErrorDescriptionEnum = {}));
var Cecer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cecer504ApplicationJson, _super);
    function Cecer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cecer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cecer504ApplicationJson.prototype, "errorDescription", void 0);
    return Cecer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cecer504ApplicationJson = Cecer504ApplicationJson;
var CecerRequest = /** @class */ (function (_super) {
    __extends(CecerRequest, _super);
    function CecerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CecerRequestBody)
    ], CecerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CecerSecurity)
    ], CecerRequest.prototype, "security", void 0);
    return CecerRequest;
}(utils_1.SpeakeasyBase));
exports.CecerRequest = CecerRequest;
var CecerResponse = /** @class */ (function (_super) {
    __extends(CecerResponse, _super);
    function CecerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CecerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CecerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cecer400ApplicationJson)
    ], CecerResponse.prototype, "cecer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cecer401ApplicationJson)
    ], CecerResponse.prototype, "cecer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cecer404ApplicationJson)
    ], CecerResponse.prototype, "cecer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cecer500ApplicationJson)
    ], CecerResponse.prototype, "cecer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cecer502ApplicationJson)
    ], CecerResponse.prototype, "cecer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cecer503ApplicationJson)
    ], CecerResponse.prototype, "cecer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cecer504ApplicationJson)
    ], CecerResponse.prototype, "cecer504ApplicationJSONObject", void 0);
    return CecerResponse;
}(utils_1.SpeakeasyBase));
exports.CecerResponse = CecerResponse;
