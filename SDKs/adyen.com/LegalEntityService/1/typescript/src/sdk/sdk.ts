/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BusinessLines } from "./businesslines";
import { Documents } from "./documents";
import { HostedOnboarding } from "./hostedonboarding";
import { LegalEntities } from "./legalentities";
import { TermsOfService } from "./termsofservice";
import { TransferInstruments } from "./transferinstruments";
import axios, { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://kyc-test.adyen.com/lem/v1"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * The Legal Entity Management API enables you to manage legal entities that contain information required for verification.
 *
 * @remarks
 * ## Authentication
 * To connect to the Legal Entity Management API, you must use the basic authentication credentials of your web service user. If you don't have one, contact the [Adyen Support Team](https://www.adyen.help/hc/en-us/requests/new). Use the web service user credentials to authenticate your request, for example:
 *
 * ```
 * curl
 * -U "ws_123456@Scope.BalancePlatform_YourBalancePlatform":"YourWsPassword" \
 * -H "Content-Type: application/json" \
 * ...
 * ```
 * Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).
 *
 * ## Versioning
 * The Legal Entity Management API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.
 *
 * For example:
 * ```
 * https://kyc-test.adyen.com/lem/v1/legalEntities
 * ```
 * ## Going live
 * When going live, your Adyen contact will provide your API credential for the live environment. You can then use the username and password to send requests to `https://kyc-live.adyen.com/lem/v1`.
 *
 *
 */
export class SDK {
  public businessLines: BusinessLines;
  public documents: Documents;
  public hostedOnboarding: HostedOnboarding;
  public legalEntities: LegalEntities;
  public termsOfService: TermsOfService;
  public transferInstruments: TransferInstruments;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;

    this.businessLines = new BusinessLines(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.documents = new Documents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.hostedOnboarding = new HostedOnboarding(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.legalEntities = new LegalEntities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.termsOfService = new TermsOfService(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.transferInstruments = new TransferInstruments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
