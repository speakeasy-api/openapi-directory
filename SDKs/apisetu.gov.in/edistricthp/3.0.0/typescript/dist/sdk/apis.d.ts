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
     * Application for Renewal of Contractor Migrant Workmen license
     *
     * @remarks
     * API to verify Application for Renewal of Contractor Migrant Workmen license.
     */
    aecmw(req: operations.AecmwRequestBody, security: operations.AecmwSecurity, config?: AxiosRequestConfig): Promise<operations.AecmwResponse>;
    /**
     * Application for Renewal of Motor Transport Worker Registration
     *
     * @remarks
     * API to verify Application for Renewal of Motor Transport Worker Registration.
     */
    aemtw(req: operations.AemtwRequestBody, security: operations.AemtwSecurity, config?: AxiosRequestConfig): Promise<operations.AemtwResponse>;
    /**
     * Agriculture/ Agriculturist Certificate
     *
     * @remarks
     * API to verify Agriculture/ Agriculturist Certificate.
     */
    agcer(req: operations.AgcerRequestBody, security: operations.AgcerSecurity, config?: AxiosRequestConfig): Promise<operations.AgcerResponse>;
    /**
     * Application for License for Inter State Migrant Workmen
     *
     * @remarks
     * API to verify Application for License for Inter State Migrant Workmen.
     */
    alimw(req: operations.AlimwRequestBody, security: operations.AlimwSecurity, config?: AxiosRequestConfig): Promise<operations.AlimwResponse>;
    /**
     * Application for Registration of Contractor Migrant Workmen license
     *
     * @remarks
     * API to verify Application for Registration of Contractor Migrant Workmen license.
     */
    arcmw(req: operations.ArcmwRequestBody, security: operations.ArcmwSecurity, config?: AxiosRequestConfig): Promise<operations.ArcmwResponse>;
    /**
     * Application for Registration of Motor Transport Worker Registration
     *
     * @remarks
     * API to verify Application for Registration of Motor Transport Worker Registration.
     */
    armtw(req: operations.ArmtwRequestBody, security: operations.ArmtwSecurity, config?: AxiosRequestConfig): Promise<operations.ArmtwResponse>;
    /**
     * Backward Area Certificate
     *
     * @remarks
     * API to verify Backward Area Certificate.
     */
    bacer(req: operations.BacerRequestBody, security: operations.BacerSecurity, config?: AxiosRequestConfig): Promise<operations.BacerResponse>;
    /**
     * Bonafide Certificate
     *
     * @remarks
     * API to verify Bonafide Certificate.
     */
    bhcer(req: operations.BhcerRequestBody, security: operations.BhcerSecurity, config?: AxiosRequestConfig): Promise<operations.BhcerResponse>;
    /**
     * BPL Card
     *
     * @remarks
     * API to verify BPL Card.
     */
    bpcrd(req: operations.BpcrdRequestBody, security: operations.BpcrdSecurity, config?: AxiosRequestConfig): Promise<operations.BpcrdResponse>;
    /**
     * Birth Certificate
     *
     * @remarks
     * API to verify Birth Certificate.
     */
    btcer(req: operations.BtcerRequestBody, security: operations.BtcerSecurity, config?: AxiosRequestConfig): Promise<operations.BtcerResponse>;
    /**
     * Renewal Certificate of Contract Labour License
     *
     * @remarks
     * API to verify Renewal Certificate of Contract Labour License.
     */
    cecer(req: operations.CecerRequestBody, security: operations.CecerSecurity, config?: AxiosRequestConfig): Promise<operations.CecerResponse>;
    /**
     * Character Certificate
     *
     * @remarks
     * API to verify Character Certificate.
     */
    chcer(req: operations.ChcerRequestBody, security: operations.ChcerSecurity, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * Registration Certificate for Contract Labour License
     *
     * @remarks
     * API to verify Registration Certificate for Contract Labour License.
     */
    clcer(req: operations.ClcerRequestBody, security: operations.ClcerSecurity, config?: AxiosRequestConfig): Promise<operations.ClcerResponse>;
    /**
     * Copy of Pariwar Register
     *
     * @remarks
     * API to verify Copy of Pariwar Register.
     */
    coprg(req: operations.CoprgRequestBody, security: operations.CoprgSecurity, config?: AxiosRequestConfig): Promise<operations.CoprgResponse>;
    /**
     * Dogra Class Certificate
     *
     * @remarks
     * API to verify Dogra Class Certificate.
     */
    dccer(req: operations.DccerRequestBody, security: operations.DccerSecurity, config?: AxiosRequestConfig): Promise<operations.DccerResponse>;
    /**
     * Domicile Certificate
     *
     * @remarks
     * API to verify Domicile Certificate.
     */
    dmcer(req: operations.DmcerRequestBody, security: operations.DmcerSecurity, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * Disabled Person Identity Card/ Certificate
     *
     * @remarks
     * API to verify Disabled Person Identity Card/ Certificate.
     */
    dpicr(req: operations.DpicrRequestBody, security: operations.DpicrSecurity, config?: AxiosRequestConfig): Promise<operations.DpicrResponse>;
    /**
     * Death Certificate
     *
     * @remarks
     * API to verify Death Certificate.
     */
    dtcer(req: operations.DtcerRequestBody, security: operations.DtcerSecurity, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * Registration Certificate of Establishment Employing Contract Labour
     *
     * @remarks
     * API to verify Registration Certificate of Establishment Employing Contract Labour.
     */
    ercer(req: operations.ErcerRequestBody, security: operations.ErcerSecurity, config?: AxiosRequestConfig): Promise<operations.ErcerResponse>;
    /**
     * Freedom Fighter Certificate
     *
     * @remarks
     * API to verify Freedom Fighter Certificate.
     */
    ffcer(req: operations.FfcerRequestBody, security: operations.FfcerSecurity, config?: AxiosRequestConfig): Promise<operations.FfcerResponse>;
    /**
     * Indigent (Needy Person) Certificate
     *
     * @remarks
     * API to verify Indigent (Needy Person) Certificate.
     */
    igcer(req: operations.IgcerRequestBody, security: operations.IgcerSecurity, config?: AxiosRequestConfig): Promise<operations.IgcerResponse>;
    /**
     * Income Certificate
     *
     * @remarks
     * API to verify Income Certificate.
     */
    incer(req: operations.IncerRequestBody, security: operations.IncerSecurity, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * Legal Heir Certificate
     *
     * @remarks
     * API to verify Legal Heir Certificate.
     */
    lhcer(req: operations.LhcerRequestBody, security: operations.LhcerSecurity, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * Minority Certificate
     *
     * @remarks
     * API to verify Minority Certificate.
     */
    mncer(req: operations.MncerRequestBody, security: operations.MncerSecurity, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * MNREGA Job Card
     *
     * @remarks
     * API to verify MNREGA Job Card.
     */
    mnrga(req: operations.MnrgaRequestBody, security: operations.MnrgaSecurity, config?: AxiosRequestConfig): Promise<operations.MnrgaResponse>;
    /**
     * OBC Certificate
     *
     * @remarks
     * API to verify OBC Certificate.
     */
    obcer(req: operations.ObcerRequestBody, security: operations.ObcerSecurity, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * Rural Area Certificate
     *
     * @remarks
     * API to verify Rural Area Certificate.
     */
    racer(req: operations.RacerRequestBody, security: operations.RacerSecurity, config?: AxiosRequestConfig): Promise<operations.RacerResponse>;
    /**
     * Marriage Certificate
     *
     * @remarks
     * API to verify Marriage Certificate.
     */
    rmcer(req: operations.RmcerRequestBody, security: operations.RmcerSecurity, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * Renewal Certificate of Shops And Commercial Establishment
     *
     * @remarks
     * API to verify Renewal Certificate of Shops And Commercial Establishment.
     */
    secer(req: operations.SecerRequestBody, security: operations.SecerSecurity, config?: AxiosRequestConfig): Promise<operations.SecerResponse>;
    /**
     * SC/ST  Certificate
     *
     * @remarks
     * API to verify SC/ST  Certificate.
     */
    shcer(req: operations.ShcerRequestBody, security: operations.ShcerSecurity, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
    /**
     * Senior Citizen Identity Card/ Certificate
     *
     * @remarks
     * API to verify Senior Citizen Identity Card/ Certificate.
     */
    sicrd(req: operations.SicrdRequestBody, security: operations.SicrdSecurity, config?: AxiosRequestConfig): Promise<operations.SicrdResponse>;
    /**
     * Registration Certificate of Shops And Commercial Establishment
     *
     * @remarks
     * API to verify Registration Certificate of Shops And Commercial Establishment.
     */
    srcer(req: operations.SrcerRequestBody, security: operations.SrcerSecurity, config?: AxiosRequestConfig): Promise<operations.SrcerResponse>;
}
