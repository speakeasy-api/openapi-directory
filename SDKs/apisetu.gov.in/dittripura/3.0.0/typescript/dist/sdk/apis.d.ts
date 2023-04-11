import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Character Certificate
     *
     * @remarks
     * API to verify Character Certificate.
     */
    chcer(req: operations.ChcerRequestBody, security: operations.ChcerSecurity, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * Distance Certificate
     *
     * @remarks
     * API to verify Distance Certificate.
     */
    dncer(req: operations.DncerRequestBody, security: operations.DncerSecurity, config?: AxiosRequestConfig): Promise<operations.DncerResponse>;
    /**
     * Dependency Certificate
     *
     * @remarks
     * API to verify Dependency Certificate.
     */
    dpcer(req: operations.DpcerRequestBody, security: operations.DpcerSecurity, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * Food Stuff License
     *
     * @remarks
     * API to verify Food Stuff License.
     */
    fslcs(req: operations.FslcsRequestBody, security: operations.FslcsSecurity, config?: AxiosRequestConfig): Promise<operations.FslcsResponse>;
    /**
     * Grievance Redressal/ Registration
     *
     * @remarks
     * API to verify Grievance Redressal/ Registration.
     */
    grred(req: operations.GrredRequestBody, security: operations.GrredSecurity, config?: AxiosRequestConfig): Promise<operations.GrredResponse>;
    /**
     * Income Certificate
     *
     * @remarks
     * API to verify Income Certificate.
     */
    incer(req: operations.IncerRequestBody, security: operations.IncerSecurity, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * Issue of Arm Licence
     *
     * @remarks
     * API to verify Issue of Arm Licence.
     */
    isoal(req: operations.IsoalRequestBody, security: operations.IsoalSecurity, config?: AxiosRequestConfig): Promise<operations.IsoalResponse>;
    /**
     * Land Valuation/ Holding/ Record Certificate
     *
     * @remarks
     * API to verify Land Valuation/ Holding/ Record Certificate.
     */
    lvcer(req: operations.LvcerRequestBody, security: operations.LvcerSecurity, config?: AxiosRequestConfig): Promise<operations.LvcerResponse>;
    /**
     * Manufacturer License
     *
     * @remarks
     * API to verify Manufacturer License.
     */
    malcs(req: operations.MalcsRequestBody, security: operations.MalcsSecurity, config?: AxiosRequestConfig): Promise<operations.MalcsResponse>;
    /**
     * Small Savings Agent License
     *
     * @remarks
     * API to verify Small Savings Agent License.
     */
    mpkby(req: operations.MpkbyRequestBody, security: operations.MpkbySecurity, config?: AxiosRequestConfig): Promise<operations.MpkbyResponse>;
    /**
     * OBC Certificate
     *
     * @remarks
     * API to verify OBC Certificate.
     */
    obcer(req: operations.ObcerRequestBody, security: operations.ObcerSecurity, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * Right to Information
     *
     * @remarks
     * API to verify Right to Information.
     */
    ritin(req: operations.RitinRequestBody, security: operations.RitinSecurity, config?: AxiosRequestConfig): Promise<operations.RitinResponse>;
    /**
     * Marriage Certificate
     *
     * @remarks
     * API to verify Marriage Certificate.
     */
    rmcer(req: operations.RmcerRequestBody, security: operations.RmcerSecurity, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * Residence Certificate
     *
     * @remarks
     * API to verify Residence Certificate.
     */
    rscer(req: operations.RscerRequestBody, security: operations.RscerSecurity, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * SC/ST  Certificate
     *
     * @remarks
     * API to verify SC/ST  Certificate.
     */
    shcer(req: operations.ShcerRequestBody, security: operations.ShcerSecurity, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
    /**
     * Surviving Member Certificate
     *
     * @remarks
     * API to verify Surviving Member Certificate.
     */
    smcer(req: operations.SmcerRequestBody, security: operations.SmcerSecurity, config?: AxiosRequestConfig): Promise<operations.SmcerResponse>;
    /**
     * Standardized Agency Systems (SAS) Agent License
     *
     * @remarks
     * API to verify Standardized Agency Systems (SAS) Agent License.
     */
    sslcs(req: operations.SslcsRequestBody, security: operations.SslcsSecurity, config?: AxiosRequestConfig): Promise<operations.SslcsResponse>;
    /**
     * License/ Verification of Weights, Measures and Instruments
     *
     * @remarks
     * API to verify License/ Verification of Weights, Measures and Instruments.
     */
    vrwmi(req: operations.VrwmiRequestBody, security: operations.VrwmiSecurity, config?: AxiosRequestConfig): Promise<operations.VrwmiResponse>;
}
