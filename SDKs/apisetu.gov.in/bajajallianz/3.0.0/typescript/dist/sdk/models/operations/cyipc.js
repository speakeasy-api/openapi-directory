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
exports.CyipcResponse = exports.CyipcRequest = exports.Cyipc504ApplicationJson = exports.Cyipc504ApplicationJsonErrorDescriptionEnum = exports.Cyipc504ApplicationJsonErrorEnum = exports.Cyipc503ApplicationJson = exports.Cyipc503ApplicationJsonErrorDescriptionEnum = exports.Cyipc503ApplicationJsonErrorEnum = exports.Cyipc502ApplicationJson = exports.Cyipc502ApplicationJsonErrorDescriptionEnum = exports.Cyipc502ApplicationJsonErrorEnum = exports.Cyipc500ApplicationJson = exports.Cyipc500ApplicationJsonErrorDescriptionEnum = exports.Cyipc500ApplicationJsonErrorEnum = exports.Cyipc404ApplicationJson = exports.Cyipc404ApplicationJsonErrorDescriptionEnum = exports.Cyipc404ApplicationJsonErrorEnum = exports.Cyipc401ApplicationJson = exports.Cyipc401ApplicationJsonErrorDescriptionEnum = exports.Cyipc401ApplicationJsonErrorEnum = exports.Cyipc400ApplicationJson = exports.Cyipc400ApplicationJsonErrorDescriptionEnum = exports.Cyipc400ApplicationJsonErrorEnum = exports.CyipcSecurity = exports.CyipcRequestBody = exports.CyipcRequestBodyFormatEnum = exports.CyipcRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CyipcRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(CyipcRequestBodyCertificateParameters, _super);
    function CyipcRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], CyipcRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy_number" }),
        __metadata("design:type", String)
    ], CyipcRequestBodyCertificateParameters.prototype, "policyNumber", void 0);
    return CyipcRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.CyipcRequestBodyCertificateParameters = CyipcRequestBodyCertificateParameters;
var CyipcRequestBodyFormatEnum;
(function (CyipcRequestBodyFormatEnum) {
    CyipcRequestBodyFormatEnum["Pdf"] = "pdf";
})(CyipcRequestBodyFormatEnum = exports.CyipcRequestBodyFormatEnum || (exports.CyipcRequestBodyFormatEnum = {}));
var CyipcRequestBody = /** @class */ (function (_super) {
    __extends(CyipcRequestBody, _super);
    function CyipcRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", CyipcRequestBodyCertificateParameters)
    ], CyipcRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], CyipcRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CyipcRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], CyipcRequestBody.prototype, "txnId", void 0);
    return CyipcRequestBody;
}(utils_1.SpeakeasyBase));
exports.CyipcRequestBody = CyipcRequestBody;
var CyipcSecurity = /** @class */ (function (_super) {
    __extends(CyipcSecurity, _super);
    function CyipcSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], CyipcSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], CyipcSecurity.prototype, "clientId", void 0);
    return CyipcSecurity;
}(utils_1.SpeakeasyBase));
exports.CyipcSecurity = CyipcSecurity;
var Cyipc400ApplicationJsonErrorEnum;
(function (Cyipc400ApplicationJsonErrorEnum) {
    Cyipc400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Cyipc400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Cyipc400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Cyipc400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Cyipc400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Cyipc400ApplicationJsonErrorEnum = exports.Cyipc400ApplicationJsonErrorEnum || (exports.Cyipc400ApplicationJsonErrorEnum = {}));
var Cyipc400ApplicationJsonErrorDescriptionEnum;
(function (Cyipc400ApplicationJsonErrorDescriptionEnum) {
    Cyipc400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Cyipc400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Cyipc400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Cyipc400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Cyipc400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Cyipc400ApplicationJsonErrorDescriptionEnum = exports.Cyipc400ApplicationJsonErrorDescriptionEnum || (exports.Cyipc400ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc400ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc400ApplicationJson, _super);
    function Cyipc400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc400ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cyipc400ApplicationJson = Cyipc400ApplicationJson;
var Cyipc401ApplicationJsonErrorEnum;
(function (Cyipc401ApplicationJsonErrorEnum) {
    Cyipc401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Cyipc401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Cyipc401ApplicationJsonErrorEnum = exports.Cyipc401ApplicationJsonErrorEnum || (exports.Cyipc401ApplicationJsonErrorEnum = {}));
var Cyipc401ApplicationJsonErrorDescriptionEnum;
(function (Cyipc401ApplicationJsonErrorDescriptionEnum) {
    Cyipc401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Cyipc401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Cyipc401ApplicationJsonErrorDescriptionEnum = exports.Cyipc401ApplicationJsonErrorDescriptionEnum || (exports.Cyipc401ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc401ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc401ApplicationJson, _super);
    function Cyipc401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc401ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cyipc401ApplicationJson = Cyipc401ApplicationJson;
var Cyipc404ApplicationJsonErrorEnum;
(function (Cyipc404ApplicationJsonErrorEnum) {
    Cyipc404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Cyipc404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Cyipc404ApplicationJsonErrorEnum = exports.Cyipc404ApplicationJsonErrorEnum || (exports.Cyipc404ApplicationJsonErrorEnum = {}));
var Cyipc404ApplicationJsonErrorDescriptionEnum;
(function (Cyipc404ApplicationJsonErrorDescriptionEnum) {
    Cyipc404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Cyipc404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Cyipc404ApplicationJsonErrorDescriptionEnum = exports.Cyipc404ApplicationJsonErrorDescriptionEnum || (exports.Cyipc404ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc404ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc404ApplicationJson, _super);
    function Cyipc404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc404ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cyipc404ApplicationJson = Cyipc404ApplicationJson;
var Cyipc500ApplicationJsonErrorEnum;
(function (Cyipc500ApplicationJsonErrorEnum) {
    Cyipc500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Cyipc500ApplicationJsonErrorEnum = exports.Cyipc500ApplicationJsonErrorEnum || (exports.Cyipc500ApplicationJsonErrorEnum = {}));
var Cyipc500ApplicationJsonErrorDescriptionEnum;
(function (Cyipc500ApplicationJsonErrorDescriptionEnum) {
    Cyipc500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Cyipc500ApplicationJsonErrorDescriptionEnum = exports.Cyipc500ApplicationJsonErrorDescriptionEnum || (exports.Cyipc500ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc500ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc500ApplicationJson, _super);
    function Cyipc500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc500ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cyipc500ApplicationJson = Cyipc500ApplicationJson;
var Cyipc502ApplicationJsonErrorEnum;
(function (Cyipc502ApplicationJsonErrorEnum) {
    Cyipc502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Cyipc502ApplicationJsonErrorEnum = exports.Cyipc502ApplicationJsonErrorEnum || (exports.Cyipc502ApplicationJsonErrorEnum = {}));
var Cyipc502ApplicationJsonErrorDescriptionEnum;
(function (Cyipc502ApplicationJsonErrorDescriptionEnum) {
    Cyipc502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Cyipc502ApplicationJsonErrorDescriptionEnum = exports.Cyipc502ApplicationJsonErrorDescriptionEnum || (exports.Cyipc502ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc502ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc502ApplicationJson, _super);
    function Cyipc502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc502ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cyipc502ApplicationJson = Cyipc502ApplicationJson;
var Cyipc503ApplicationJsonErrorEnum;
(function (Cyipc503ApplicationJsonErrorEnum) {
    Cyipc503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Cyipc503ApplicationJsonErrorEnum = exports.Cyipc503ApplicationJsonErrorEnum || (exports.Cyipc503ApplicationJsonErrorEnum = {}));
var Cyipc503ApplicationJsonErrorDescriptionEnum;
(function (Cyipc503ApplicationJsonErrorDescriptionEnum) {
    Cyipc503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Cyipc503ApplicationJsonErrorDescriptionEnum = exports.Cyipc503ApplicationJsonErrorDescriptionEnum || (exports.Cyipc503ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc503ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc503ApplicationJson, _super);
    function Cyipc503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc503ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cyipc503ApplicationJson = Cyipc503ApplicationJson;
var Cyipc504ApplicationJsonErrorEnum;
(function (Cyipc504ApplicationJsonErrorEnum) {
    Cyipc504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Cyipc504ApplicationJsonErrorEnum = exports.Cyipc504ApplicationJsonErrorEnum || (exports.Cyipc504ApplicationJsonErrorEnum = {}));
var Cyipc504ApplicationJsonErrorDescriptionEnum;
(function (Cyipc504ApplicationJsonErrorDescriptionEnum) {
    Cyipc504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Cyipc504ApplicationJsonErrorDescriptionEnum = exports.Cyipc504ApplicationJsonErrorDescriptionEnum || (exports.Cyipc504ApplicationJsonErrorDescriptionEnum = {}));
var Cyipc504ApplicationJson = /** @class */ (function (_super) {
    __extends(Cyipc504ApplicationJson, _super);
    function Cyipc504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Cyipc504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Cyipc504ApplicationJson.prototype, "errorDescription", void 0);
    return Cyipc504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cyipc504ApplicationJson = Cyipc504ApplicationJson;
var CyipcRequest = /** @class */ (function (_super) {
    __extends(CyipcRequest, _super);
    function CyipcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CyipcRequestBody)
    ], CyipcRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CyipcSecurity)
    ], CyipcRequest.prototype, "security", void 0);
    return CyipcRequest;
}(utils_1.SpeakeasyBase));
exports.CyipcRequest = CyipcRequest;
var CyipcResponse = /** @class */ (function (_super) {
    __extends(CyipcResponse, _super);
    function CyipcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CyipcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CyipcResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cyipc400ApplicationJson)
    ], CyipcResponse.prototype, "cyipc400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cyipc401ApplicationJson)
    ], CyipcResponse.prototype, "cyipc401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cyipc404ApplicationJson)
    ], CyipcResponse.prototype, "cyipc404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cyipc500ApplicationJson)
    ], CyipcResponse.prototype, "cyipc500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cyipc502ApplicationJson)
    ], CyipcResponse.prototype, "cyipc502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cyipc503ApplicationJson)
    ], CyipcResponse.prototype, "cyipc503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cyipc504ApplicationJson)
    ], CyipcResponse.prototype, "cyipc504ApplicationJSONObject", void 0);
    return CyipcResponse;
}(utils_1.SpeakeasyBase));
exports.CyipcResponse = CyipcResponse;
