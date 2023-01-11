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
exports.LocerResponse = exports.LocerRequest = exports.Locer504ApplicationJson = exports.Locer504ApplicationJsonErrorDescriptionEnum = exports.Locer504ApplicationJsonErrorEnum = exports.Locer503ApplicationJson = exports.Locer503ApplicationJsonErrorDescriptionEnum = exports.Locer503ApplicationJsonErrorEnum = exports.Locer502ApplicationJson = exports.Locer502ApplicationJsonErrorDescriptionEnum = exports.Locer502ApplicationJsonErrorEnum = exports.Locer500ApplicationJson = exports.Locer500ApplicationJsonErrorDescriptionEnum = exports.Locer500ApplicationJsonErrorEnum = exports.Locer404ApplicationJson = exports.Locer404ApplicationJsonErrorDescriptionEnum = exports.Locer404ApplicationJsonErrorEnum = exports.Locer401ApplicationJson = exports.Locer401ApplicationJsonErrorDescriptionEnum = exports.Locer401ApplicationJsonErrorEnum = exports.Locer400ApplicationJson = exports.Locer400ApplicationJsonErrorDescriptionEnum = exports.Locer400ApplicationJsonErrorEnum = exports.LocerSecurity = exports.LocerRequestBody = exports.LocerRequestBodyFormatEnum = exports.LocerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var LocerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(LocerRequestBodyCertificateParameters, _super);
    function LocerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aplno" }),
        __metadata("design:type", String)
    ], LocerRequestBodyCertificateParameters.prototype, "aplno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certno" }),
        __metadata("design:type", String)
    ], LocerRequestBodyCertificateParameters.prototype, "certno", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sccd" }),
        __metadata("design:type", String)
    ], LocerRequestBodyCertificateParameters.prototype, "sccd", void 0);
    return LocerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.LocerRequestBodyCertificateParameters = LocerRequestBodyCertificateParameters;
var LocerRequestBodyFormatEnum;
(function (LocerRequestBodyFormatEnum) {
    LocerRequestBodyFormatEnum["Pdf"] = "pdf";
})(LocerRequestBodyFormatEnum = exports.LocerRequestBodyFormatEnum || (exports.LocerRequestBodyFormatEnum = {}));
var LocerRequestBody = /** @class */ (function (_super) {
    __extends(LocerRequestBody, _super);
    function LocerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", LocerRequestBodyCertificateParameters)
    ], LocerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], LocerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], LocerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], LocerRequestBody.prototype, "txnId", void 0);
    return LocerRequestBody;
}(utils_1.SpeakeasyBase));
exports.LocerRequestBody = LocerRequestBody;
var LocerSecurity = /** @class */ (function (_super) {
    __extends(LocerSecurity, _super);
    function LocerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LocerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], LocerSecurity.prototype, "clientId", void 0);
    return LocerSecurity;
}(utils_1.SpeakeasyBase));
exports.LocerSecurity = LocerSecurity;
var Locer400ApplicationJsonErrorEnum;
(function (Locer400ApplicationJsonErrorEnum) {
    Locer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Locer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Locer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Locer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Locer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Locer400ApplicationJsonErrorEnum = exports.Locer400ApplicationJsonErrorEnum || (exports.Locer400ApplicationJsonErrorEnum = {}));
var Locer400ApplicationJsonErrorDescriptionEnum;
(function (Locer400ApplicationJsonErrorDescriptionEnum) {
    Locer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Locer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Locer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Locer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Locer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Locer400ApplicationJsonErrorDescriptionEnum = exports.Locer400ApplicationJsonErrorDescriptionEnum || (exports.Locer400ApplicationJsonErrorDescriptionEnum = {}));
var Locer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer400ApplicationJson, _super);
    function Locer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer400ApplicationJson.prototype, "errorDescription", void 0);
    return Locer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Locer400ApplicationJson = Locer400ApplicationJson;
var Locer401ApplicationJsonErrorEnum;
(function (Locer401ApplicationJsonErrorEnum) {
    Locer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Locer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Locer401ApplicationJsonErrorEnum = exports.Locer401ApplicationJsonErrorEnum || (exports.Locer401ApplicationJsonErrorEnum = {}));
var Locer401ApplicationJsonErrorDescriptionEnum;
(function (Locer401ApplicationJsonErrorDescriptionEnum) {
    Locer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Locer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Locer401ApplicationJsonErrorDescriptionEnum = exports.Locer401ApplicationJsonErrorDescriptionEnum || (exports.Locer401ApplicationJsonErrorDescriptionEnum = {}));
var Locer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer401ApplicationJson, _super);
    function Locer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer401ApplicationJson.prototype, "errorDescription", void 0);
    return Locer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Locer401ApplicationJson = Locer401ApplicationJson;
var Locer404ApplicationJsonErrorEnum;
(function (Locer404ApplicationJsonErrorEnum) {
    Locer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Locer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Locer404ApplicationJsonErrorEnum = exports.Locer404ApplicationJsonErrorEnum || (exports.Locer404ApplicationJsonErrorEnum = {}));
var Locer404ApplicationJsonErrorDescriptionEnum;
(function (Locer404ApplicationJsonErrorDescriptionEnum) {
    Locer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Locer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Locer404ApplicationJsonErrorDescriptionEnum = exports.Locer404ApplicationJsonErrorDescriptionEnum || (exports.Locer404ApplicationJsonErrorDescriptionEnum = {}));
var Locer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer404ApplicationJson, _super);
    function Locer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer404ApplicationJson.prototype, "errorDescription", void 0);
    return Locer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Locer404ApplicationJson = Locer404ApplicationJson;
var Locer500ApplicationJsonErrorEnum;
(function (Locer500ApplicationJsonErrorEnum) {
    Locer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Locer500ApplicationJsonErrorEnum = exports.Locer500ApplicationJsonErrorEnum || (exports.Locer500ApplicationJsonErrorEnum = {}));
var Locer500ApplicationJsonErrorDescriptionEnum;
(function (Locer500ApplicationJsonErrorDescriptionEnum) {
    Locer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Locer500ApplicationJsonErrorDescriptionEnum = exports.Locer500ApplicationJsonErrorDescriptionEnum || (exports.Locer500ApplicationJsonErrorDescriptionEnum = {}));
var Locer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer500ApplicationJson, _super);
    function Locer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer500ApplicationJson.prototype, "errorDescription", void 0);
    return Locer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Locer500ApplicationJson = Locer500ApplicationJson;
var Locer502ApplicationJsonErrorEnum;
(function (Locer502ApplicationJsonErrorEnum) {
    Locer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Locer502ApplicationJsonErrorEnum = exports.Locer502ApplicationJsonErrorEnum || (exports.Locer502ApplicationJsonErrorEnum = {}));
var Locer502ApplicationJsonErrorDescriptionEnum;
(function (Locer502ApplicationJsonErrorDescriptionEnum) {
    Locer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Locer502ApplicationJsonErrorDescriptionEnum = exports.Locer502ApplicationJsonErrorDescriptionEnum || (exports.Locer502ApplicationJsonErrorDescriptionEnum = {}));
var Locer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer502ApplicationJson, _super);
    function Locer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer502ApplicationJson.prototype, "errorDescription", void 0);
    return Locer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Locer502ApplicationJson = Locer502ApplicationJson;
var Locer503ApplicationJsonErrorEnum;
(function (Locer503ApplicationJsonErrorEnum) {
    Locer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Locer503ApplicationJsonErrorEnum = exports.Locer503ApplicationJsonErrorEnum || (exports.Locer503ApplicationJsonErrorEnum = {}));
var Locer503ApplicationJsonErrorDescriptionEnum;
(function (Locer503ApplicationJsonErrorDescriptionEnum) {
    Locer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Locer503ApplicationJsonErrorDescriptionEnum = exports.Locer503ApplicationJsonErrorDescriptionEnum || (exports.Locer503ApplicationJsonErrorDescriptionEnum = {}));
var Locer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer503ApplicationJson, _super);
    function Locer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer503ApplicationJson.prototype, "errorDescription", void 0);
    return Locer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Locer503ApplicationJson = Locer503ApplicationJson;
var Locer504ApplicationJsonErrorEnum;
(function (Locer504ApplicationJsonErrorEnum) {
    Locer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Locer504ApplicationJsonErrorEnum = exports.Locer504ApplicationJsonErrorEnum || (exports.Locer504ApplicationJsonErrorEnum = {}));
var Locer504ApplicationJsonErrorDescriptionEnum;
(function (Locer504ApplicationJsonErrorDescriptionEnum) {
    Locer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Locer504ApplicationJsonErrorDescriptionEnum = exports.Locer504ApplicationJsonErrorDescriptionEnum || (exports.Locer504ApplicationJsonErrorDescriptionEnum = {}));
var Locer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Locer504ApplicationJson, _super);
    function Locer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Locer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Locer504ApplicationJson.prototype, "errorDescription", void 0);
    return Locer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Locer504ApplicationJson = Locer504ApplicationJson;
var LocerRequest = /** @class */ (function (_super) {
    __extends(LocerRequest, _super);
    function LocerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", LocerRequestBody)
    ], LocerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LocerSecurity)
    ], LocerRequest.prototype, "security", void 0);
    return LocerRequest;
}(utils_1.SpeakeasyBase));
exports.LocerRequest = LocerRequest;
var LocerResponse = /** @class */ (function (_super) {
    __extends(LocerResponse, _super);
    function LocerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LocerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LocerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Locer400ApplicationJson)
    ], LocerResponse.prototype, "locer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Locer401ApplicationJson)
    ], LocerResponse.prototype, "locer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Locer404ApplicationJson)
    ], LocerResponse.prototype, "locer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Locer500ApplicationJson)
    ], LocerResponse.prototype, "locer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Locer502ApplicationJson)
    ], LocerResponse.prototype, "locer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Locer503ApplicationJson)
    ], LocerResponse.prototype, "locer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Locer504ApplicationJson)
    ], LocerResponse.prototype, "locer504ApplicationJSONObject", void 0);
    return LocerResponse;
}(utils_1.SpeakeasyBase));
exports.LocerResponse = LocerResponse;
