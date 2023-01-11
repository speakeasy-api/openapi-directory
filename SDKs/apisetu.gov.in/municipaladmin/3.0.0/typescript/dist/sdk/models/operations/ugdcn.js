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
exports.UgdcnResponse = exports.UgdcnRequest = exports.Ugdcn504ApplicationJson = exports.Ugdcn504ApplicationJsonErrorDescriptionEnum = exports.Ugdcn504ApplicationJsonErrorEnum = exports.Ugdcn503ApplicationJson = exports.Ugdcn503ApplicationJsonErrorDescriptionEnum = exports.Ugdcn503ApplicationJsonErrorEnum = exports.Ugdcn502ApplicationJson = exports.Ugdcn502ApplicationJsonErrorDescriptionEnum = exports.Ugdcn502ApplicationJsonErrorEnum = exports.Ugdcn500ApplicationJson = exports.Ugdcn500ApplicationJsonErrorDescriptionEnum = exports.Ugdcn500ApplicationJsonErrorEnum = exports.Ugdcn404ApplicationJson = exports.Ugdcn404ApplicationJsonErrorDescriptionEnum = exports.Ugdcn404ApplicationJsonErrorEnum = exports.Ugdcn401ApplicationJson = exports.Ugdcn401ApplicationJsonErrorDescriptionEnum = exports.Ugdcn401ApplicationJsonErrorEnum = exports.Ugdcn400ApplicationJson = exports.Ugdcn400ApplicationJsonErrorDescriptionEnum = exports.Ugdcn400ApplicationJsonErrorEnum = exports.UgdcnSecurity = exports.UgdcnRequestBody = exports.UgdcnRequestBodyFormatEnum = exports.UgdcnRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UgdcnRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(UgdcnRequestBodyCertificateParameters, _super);
    function UgdcnRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DocumentNumber" }),
        __metadata("design:type", String)
    ], UgdcnRequestBodyCertificateParameters.prototype, "documentNumber", void 0);
    return UgdcnRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.UgdcnRequestBodyCertificateParameters = UgdcnRequestBodyCertificateParameters;
var UgdcnRequestBodyFormatEnum;
(function (UgdcnRequestBodyFormatEnum) {
    UgdcnRequestBodyFormatEnum["Pdf"] = "pdf";
})(UgdcnRequestBodyFormatEnum = exports.UgdcnRequestBodyFormatEnum || (exports.UgdcnRequestBodyFormatEnum = {}));
var UgdcnRequestBody = /** @class */ (function (_super) {
    __extends(UgdcnRequestBody, _super);
    function UgdcnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", UgdcnRequestBodyCertificateParameters)
    ], UgdcnRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], UgdcnRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], UgdcnRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], UgdcnRequestBody.prototype, "txnId", void 0);
    return UgdcnRequestBody;
}(utils_1.SpeakeasyBase));
exports.UgdcnRequestBody = UgdcnRequestBody;
var UgdcnSecurity = /** @class */ (function (_super) {
    __extends(UgdcnSecurity, _super);
    function UgdcnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], UgdcnSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], UgdcnSecurity.prototype, "clientId", void 0);
    return UgdcnSecurity;
}(utils_1.SpeakeasyBase));
exports.UgdcnSecurity = UgdcnSecurity;
var Ugdcn400ApplicationJsonErrorEnum;
(function (Ugdcn400ApplicationJsonErrorEnum) {
    Ugdcn400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Ugdcn400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Ugdcn400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Ugdcn400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Ugdcn400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Ugdcn400ApplicationJsonErrorEnum = exports.Ugdcn400ApplicationJsonErrorEnum || (exports.Ugdcn400ApplicationJsonErrorEnum = {}));
var Ugdcn400ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn400ApplicationJsonErrorDescriptionEnum) {
    Ugdcn400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Ugdcn400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Ugdcn400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Ugdcn400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Ugdcn400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Ugdcn400ApplicationJsonErrorDescriptionEnum = exports.Ugdcn400ApplicationJsonErrorDescriptionEnum || (exports.Ugdcn400ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn400ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn400ApplicationJson, _super);
    function Ugdcn400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn400ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ugdcn400ApplicationJson = Ugdcn400ApplicationJson;
var Ugdcn401ApplicationJsonErrorEnum;
(function (Ugdcn401ApplicationJsonErrorEnum) {
    Ugdcn401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Ugdcn401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Ugdcn401ApplicationJsonErrorEnum = exports.Ugdcn401ApplicationJsonErrorEnum || (exports.Ugdcn401ApplicationJsonErrorEnum = {}));
var Ugdcn401ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn401ApplicationJsonErrorDescriptionEnum) {
    Ugdcn401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Ugdcn401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Ugdcn401ApplicationJsonErrorDescriptionEnum = exports.Ugdcn401ApplicationJsonErrorDescriptionEnum || (exports.Ugdcn401ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn401ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn401ApplicationJson, _super);
    function Ugdcn401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn401ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ugdcn401ApplicationJson = Ugdcn401ApplicationJson;
var Ugdcn404ApplicationJsonErrorEnum;
(function (Ugdcn404ApplicationJsonErrorEnum) {
    Ugdcn404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Ugdcn404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Ugdcn404ApplicationJsonErrorEnum = exports.Ugdcn404ApplicationJsonErrorEnum || (exports.Ugdcn404ApplicationJsonErrorEnum = {}));
var Ugdcn404ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn404ApplicationJsonErrorDescriptionEnum) {
    Ugdcn404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Ugdcn404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Ugdcn404ApplicationJsonErrorDescriptionEnum = exports.Ugdcn404ApplicationJsonErrorDescriptionEnum || (exports.Ugdcn404ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn404ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn404ApplicationJson, _super);
    function Ugdcn404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn404ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ugdcn404ApplicationJson = Ugdcn404ApplicationJson;
var Ugdcn500ApplicationJsonErrorEnum;
(function (Ugdcn500ApplicationJsonErrorEnum) {
    Ugdcn500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Ugdcn500ApplicationJsonErrorEnum = exports.Ugdcn500ApplicationJsonErrorEnum || (exports.Ugdcn500ApplicationJsonErrorEnum = {}));
var Ugdcn500ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn500ApplicationJsonErrorDescriptionEnum) {
    Ugdcn500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Ugdcn500ApplicationJsonErrorDescriptionEnum = exports.Ugdcn500ApplicationJsonErrorDescriptionEnum || (exports.Ugdcn500ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn500ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn500ApplicationJson, _super);
    function Ugdcn500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn500ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ugdcn500ApplicationJson = Ugdcn500ApplicationJson;
var Ugdcn502ApplicationJsonErrorEnum;
(function (Ugdcn502ApplicationJsonErrorEnum) {
    Ugdcn502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Ugdcn502ApplicationJsonErrorEnum = exports.Ugdcn502ApplicationJsonErrorEnum || (exports.Ugdcn502ApplicationJsonErrorEnum = {}));
var Ugdcn502ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn502ApplicationJsonErrorDescriptionEnum) {
    Ugdcn502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Ugdcn502ApplicationJsonErrorDescriptionEnum = exports.Ugdcn502ApplicationJsonErrorDescriptionEnum || (exports.Ugdcn502ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn502ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn502ApplicationJson, _super);
    function Ugdcn502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn502ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ugdcn502ApplicationJson = Ugdcn502ApplicationJson;
var Ugdcn503ApplicationJsonErrorEnum;
(function (Ugdcn503ApplicationJsonErrorEnum) {
    Ugdcn503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Ugdcn503ApplicationJsonErrorEnum = exports.Ugdcn503ApplicationJsonErrorEnum || (exports.Ugdcn503ApplicationJsonErrorEnum = {}));
var Ugdcn503ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn503ApplicationJsonErrorDescriptionEnum) {
    Ugdcn503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Ugdcn503ApplicationJsonErrorDescriptionEnum = exports.Ugdcn503ApplicationJsonErrorDescriptionEnum || (exports.Ugdcn503ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn503ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn503ApplicationJson, _super);
    function Ugdcn503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn503ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ugdcn503ApplicationJson = Ugdcn503ApplicationJson;
var Ugdcn504ApplicationJsonErrorEnum;
(function (Ugdcn504ApplicationJsonErrorEnum) {
    Ugdcn504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Ugdcn504ApplicationJsonErrorEnum = exports.Ugdcn504ApplicationJsonErrorEnum || (exports.Ugdcn504ApplicationJsonErrorEnum = {}));
var Ugdcn504ApplicationJsonErrorDescriptionEnum;
(function (Ugdcn504ApplicationJsonErrorDescriptionEnum) {
    Ugdcn504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Ugdcn504ApplicationJsonErrorDescriptionEnum = exports.Ugdcn504ApplicationJsonErrorDescriptionEnum || (exports.Ugdcn504ApplicationJsonErrorDescriptionEnum = {}));
var Ugdcn504ApplicationJson = /** @class */ (function (_super) {
    __extends(Ugdcn504ApplicationJson, _super);
    function Ugdcn504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Ugdcn504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Ugdcn504ApplicationJson.prototype, "errorDescription", void 0);
    return Ugdcn504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Ugdcn504ApplicationJson = Ugdcn504ApplicationJson;
var UgdcnRequest = /** @class */ (function (_super) {
    __extends(UgdcnRequest, _super);
    function UgdcnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UgdcnRequestBody)
    ], UgdcnRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UgdcnSecurity)
    ], UgdcnRequest.prototype, "security", void 0);
    return UgdcnRequest;
}(utils_1.SpeakeasyBase));
exports.UgdcnRequest = UgdcnRequest;
var UgdcnResponse = /** @class */ (function (_super) {
    __extends(UgdcnResponse, _super);
    function UgdcnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UgdcnResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UgdcnResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ugdcn400ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ugdcn401ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ugdcn404ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ugdcn500ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ugdcn502ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ugdcn503ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Ugdcn504ApplicationJson)
    ], UgdcnResponse.prototype, "ugdcn504ApplicationJSONObject", void 0);
    return UgdcnResponse;
}(utils_1.SpeakeasyBase));
exports.UgdcnResponse = UgdcnResponse;
