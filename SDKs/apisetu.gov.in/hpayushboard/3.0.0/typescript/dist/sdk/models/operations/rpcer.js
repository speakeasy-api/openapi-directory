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
exports.RpcerResponse = exports.RpcerRequest = exports.Rpcer504ApplicationJson = exports.Rpcer504ApplicationJsonErrorDescriptionEnum = exports.Rpcer504ApplicationJsonErrorEnum = exports.Rpcer503ApplicationJson = exports.Rpcer503ApplicationJsonErrorDescriptionEnum = exports.Rpcer503ApplicationJsonErrorEnum = exports.Rpcer502ApplicationJson = exports.Rpcer502ApplicationJsonErrorDescriptionEnum = exports.Rpcer502ApplicationJsonErrorEnum = exports.Rpcer500ApplicationJson = exports.Rpcer500ApplicationJsonErrorDescriptionEnum = exports.Rpcer500ApplicationJsonErrorEnum = exports.Rpcer404ApplicationJson = exports.Rpcer404ApplicationJsonErrorDescriptionEnum = exports.Rpcer404ApplicationJsonErrorEnum = exports.Rpcer401ApplicationJson = exports.Rpcer401ApplicationJsonErrorDescriptionEnum = exports.Rpcer401ApplicationJsonErrorEnum = exports.Rpcer400ApplicationJson = exports.Rpcer400ApplicationJsonErrorDescriptionEnum = exports.Rpcer400ApplicationJsonErrorEnum = exports.RpcerSecurity = exports.RpcerRequestBody = exports.RpcerRequestBodyFormatEnum = exports.RpcerRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RpcerRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(RpcerRequestBodyCertificateParameters, _super);
    function RpcerRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], RpcerRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RegistrationNo" }),
        __metadata("design:type", String)
    ], RpcerRequestBodyCertificateParameters.prototype, "registrationNo", void 0);
    return RpcerRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.RpcerRequestBodyCertificateParameters = RpcerRequestBodyCertificateParameters;
var RpcerRequestBodyFormatEnum;
(function (RpcerRequestBodyFormatEnum) {
    RpcerRequestBodyFormatEnum["Pdf"] = "pdf";
})(RpcerRequestBodyFormatEnum = exports.RpcerRequestBodyFormatEnum || (exports.RpcerRequestBodyFormatEnum = {}));
var RpcerRequestBody = /** @class */ (function (_super) {
    __extends(RpcerRequestBody, _super);
    function RpcerRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", RpcerRequestBodyCertificateParameters)
    ], RpcerRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], RpcerRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], RpcerRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], RpcerRequestBody.prototype, "txnId", void 0);
    return RpcerRequestBody;
}(utils_1.SpeakeasyBase));
exports.RpcerRequestBody = RpcerRequestBody;
var RpcerSecurity = /** @class */ (function (_super) {
    __extends(RpcerSecurity, _super);
    function RpcerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], RpcerSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], RpcerSecurity.prototype, "clientId", void 0);
    return RpcerSecurity;
}(utils_1.SpeakeasyBase));
exports.RpcerSecurity = RpcerSecurity;
var Rpcer400ApplicationJsonErrorEnum;
(function (Rpcer400ApplicationJsonErrorEnum) {
    Rpcer400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Rpcer400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Rpcer400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Rpcer400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Rpcer400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Rpcer400ApplicationJsonErrorEnum = exports.Rpcer400ApplicationJsonErrorEnum || (exports.Rpcer400ApplicationJsonErrorEnum = {}));
var Rpcer400ApplicationJsonErrorDescriptionEnum;
(function (Rpcer400ApplicationJsonErrorDescriptionEnum) {
    Rpcer400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Rpcer400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Rpcer400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Rpcer400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Rpcer400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Rpcer400ApplicationJsonErrorDescriptionEnum = exports.Rpcer400ApplicationJsonErrorDescriptionEnum || (exports.Rpcer400ApplicationJsonErrorDescriptionEnum = {}));
var Rpcer400ApplicationJson = /** @class */ (function (_super) {
    __extends(Rpcer400ApplicationJson, _super);
    function Rpcer400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rpcer400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rpcer400ApplicationJson.prototype, "errorDescription", void 0);
    return Rpcer400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rpcer400ApplicationJson = Rpcer400ApplicationJson;
var Rpcer401ApplicationJsonErrorEnum;
(function (Rpcer401ApplicationJsonErrorEnum) {
    Rpcer401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Rpcer401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Rpcer401ApplicationJsonErrorEnum = exports.Rpcer401ApplicationJsonErrorEnum || (exports.Rpcer401ApplicationJsonErrorEnum = {}));
var Rpcer401ApplicationJsonErrorDescriptionEnum;
(function (Rpcer401ApplicationJsonErrorDescriptionEnum) {
    Rpcer401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Rpcer401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Rpcer401ApplicationJsonErrorDescriptionEnum = exports.Rpcer401ApplicationJsonErrorDescriptionEnum || (exports.Rpcer401ApplicationJsonErrorDescriptionEnum = {}));
var Rpcer401ApplicationJson = /** @class */ (function (_super) {
    __extends(Rpcer401ApplicationJson, _super);
    function Rpcer401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rpcer401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rpcer401ApplicationJson.prototype, "errorDescription", void 0);
    return Rpcer401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rpcer401ApplicationJson = Rpcer401ApplicationJson;
var Rpcer404ApplicationJsonErrorEnum;
(function (Rpcer404ApplicationJsonErrorEnum) {
    Rpcer404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Rpcer404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Rpcer404ApplicationJsonErrorEnum = exports.Rpcer404ApplicationJsonErrorEnum || (exports.Rpcer404ApplicationJsonErrorEnum = {}));
var Rpcer404ApplicationJsonErrorDescriptionEnum;
(function (Rpcer404ApplicationJsonErrorDescriptionEnum) {
    Rpcer404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Rpcer404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Rpcer404ApplicationJsonErrorDescriptionEnum = exports.Rpcer404ApplicationJsonErrorDescriptionEnum || (exports.Rpcer404ApplicationJsonErrorDescriptionEnum = {}));
var Rpcer404ApplicationJson = /** @class */ (function (_super) {
    __extends(Rpcer404ApplicationJson, _super);
    function Rpcer404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rpcer404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rpcer404ApplicationJson.prototype, "errorDescription", void 0);
    return Rpcer404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rpcer404ApplicationJson = Rpcer404ApplicationJson;
var Rpcer500ApplicationJsonErrorEnum;
(function (Rpcer500ApplicationJsonErrorEnum) {
    Rpcer500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Rpcer500ApplicationJsonErrorEnum = exports.Rpcer500ApplicationJsonErrorEnum || (exports.Rpcer500ApplicationJsonErrorEnum = {}));
var Rpcer500ApplicationJsonErrorDescriptionEnum;
(function (Rpcer500ApplicationJsonErrorDescriptionEnum) {
    Rpcer500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Rpcer500ApplicationJsonErrorDescriptionEnum = exports.Rpcer500ApplicationJsonErrorDescriptionEnum || (exports.Rpcer500ApplicationJsonErrorDescriptionEnum = {}));
var Rpcer500ApplicationJson = /** @class */ (function (_super) {
    __extends(Rpcer500ApplicationJson, _super);
    function Rpcer500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rpcer500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rpcer500ApplicationJson.prototype, "errorDescription", void 0);
    return Rpcer500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rpcer500ApplicationJson = Rpcer500ApplicationJson;
var Rpcer502ApplicationJsonErrorEnum;
(function (Rpcer502ApplicationJsonErrorEnum) {
    Rpcer502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Rpcer502ApplicationJsonErrorEnum = exports.Rpcer502ApplicationJsonErrorEnum || (exports.Rpcer502ApplicationJsonErrorEnum = {}));
var Rpcer502ApplicationJsonErrorDescriptionEnum;
(function (Rpcer502ApplicationJsonErrorDescriptionEnum) {
    Rpcer502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Rpcer502ApplicationJsonErrorDescriptionEnum = exports.Rpcer502ApplicationJsonErrorDescriptionEnum || (exports.Rpcer502ApplicationJsonErrorDescriptionEnum = {}));
var Rpcer502ApplicationJson = /** @class */ (function (_super) {
    __extends(Rpcer502ApplicationJson, _super);
    function Rpcer502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rpcer502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rpcer502ApplicationJson.prototype, "errorDescription", void 0);
    return Rpcer502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rpcer502ApplicationJson = Rpcer502ApplicationJson;
var Rpcer503ApplicationJsonErrorEnum;
(function (Rpcer503ApplicationJsonErrorEnum) {
    Rpcer503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Rpcer503ApplicationJsonErrorEnum = exports.Rpcer503ApplicationJsonErrorEnum || (exports.Rpcer503ApplicationJsonErrorEnum = {}));
var Rpcer503ApplicationJsonErrorDescriptionEnum;
(function (Rpcer503ApplicationJsonErrorDescriptionEnum) {
    Rpcer503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Rpcer503ApplicationJsonErrorDescriptionEnum = exports.Rpcer503ApplicationJsonErrorDescriptionEnum || (exports.Rpcer503ApplicationJsonErrorDescriptionEnum = {}));
var Rpcer503ApplicationJson = /** @class */ (function (_super) {
    __extends(Rpcer503ApplicationJson, _super);
    function Rpcer503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rpcer503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rpcer503ApplicationJson.prototype, "errorDescription", void 0);
    return Rpcer503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rpcer503ApplicationJson = Rpcer503ApplicationJson;
var Rpcer504ApplicationJsonErrorEnum;
(function (Rpcer504ApplicationJsonErrorEnum) {
    Rpcer504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Rpcer504ApplicationJsonErrorEnum = exports.Rpcer504ApplicationJsonErrorEnum || (exports.Rpcer504ApplicationJsonErrorEnum = {}));
var Rpcer504ApplicationJsonErrorDescriptionEnum;
(function (Rpcer504ApplicationJsonErrorDescriptionEnum) {
    Rpcer504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Rpcer504ApplicationJsonErrorDescriptionEnum = exports.Rpcer504ApplicationJsonErrorDescriptionEnum || (exports.Rpcer504ApplicationJsonErrorDescriptionEnum = {}));
var Rpcer504ApplicationJson = /** @class */ (function (_super) {
    __extends(Rpcer504ApplicationJson, _super);
    function Rpcer504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Rpcer504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Rpcer504ApplicationJson.prototype, "errorDescription", void 0);
    return Rpcer504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Rpcer504ApplicationJson = Rpcer504ApplicationJson;
var RpcerRequest = /** @class */ (function (_super) {
    __extends(RpcerRequest, _super);
    function RpcerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RpcerRequestBody)
    ], RpcerRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RpcerSecurity)
    ], RpcerRequest.prototype, "security", void 0);
    return RpcerRequest;
}(utils_1.SpeakeasyBase));
exports.RpcerRequest = RpcerRequest;
var RpcerResponse = /** @class */ (function (_super) {
    __extends(RpcerResponse, _super);
    function RpcerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RpcerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RpcerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rpcer400ApplicationJson)
    ], RpcerResponse.prototype, "rpcer400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rpcer401ApplicationJson)
    ], RpcerResponse.prototype, "rpcer401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rpcer404ApplicationJson)
    ], RpcerResponse.prototype, "rpcer404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rpcer500ApplicationJson)
    ], RpcerResponse.prototype, "rpcer500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rpcer502ApplicationJson)
    ], RpcerResponse.prototype, "rpcer502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rpcer503ApplicationJson)
    ], RpcerResponse.prototype, "rpcer503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Rpcer504ApplicationJson)
    ], RpcerResponse.prototype, "rpcer504ApplicationJSONObject", void 0);
    return RpcerResponse;
}(utils_1.SpeakeasyBase));
exports.RpcerResponse = RpcerResponse;
