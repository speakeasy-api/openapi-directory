import { DispatchGreenEnergyDistributionAPI } from "./dispatchgreenenergydistributionapi";
import { Easee } from "./easee";
import { GreenPowerIndexGrunstromIndex } from "./greenpowerindexgrunstromindex";
import { MeteringDecorator } from "./meteringdecorator";
import { Ocpp } from "./ocpp";
import { OpenMETER } from "./openmeter";
import { SmartHome } from "./smarthome";
import { StromkontoLedger } from "./stromkontoledger";
import { StromQuittung } from "./stromquittung";
import { TariffPriceAPI } from "./tariffpriceapi";
import { Tse } from "./tse";
import { WiMWechselprozesseImMesswesenStromStatusAPI } from "./wimwechselprozesseimmesswesenstromstatusapi";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.corrently.io/v2.0"];
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
 * *Corrently - from italian corrente, which is energy*
 *
 * @remarks
 * # Introduction
 * The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management.
 * As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding.
 * [Released SKDs for Download](https://github.com/energychain/corrently-api/releases)
 *
 */
export declare class SDK {
    /**
     * Provides latest dispatch information of green energy at a specific location in Germany (Herkunft/GrünstromMix). It allows to do schedule management (Fahrplanmanagement) of green energy generation facilities, demand and resilience management for grid operators. The public version (OpenAPI) is always post fact. If you are interessted in pre fact (forecast) data, you might get in contact with STROMDAO GmbH.
     *
     * @remarks
     *
     */
    dispatchGreenEnergyDistributionAPI: DispatchGreenEnergyDistributionAPI;
    /**
     * Green Power Index (GrünstromIndex), an AI based service to forecast energy sources in the grid (regionale Stromherkunft).
     *
     * @remarks
     * Further Details and sample implementation is available at [gruenstromindex.de](https://www.gruenstromindex.de/).
     *
     */
    greenPowerIndexGrunstromIndex: GreenPowerIndexGrunstromIndex;
    /**
     * Allows to virtualy act as an Meter Point Operator by decorating meter readings with GreenPowerIndex (GrünstromIndex) handles. In principal this service decorates meter [OBIS Code](https://de.wikipedia.org/wiki/OBIS-Kennzahlen) 1.8.0 values to 1.8.1 and 1.8.2 according to the local and actual GSI value. A signature gets applied to the reading and all three OBIS values get hashed into the Energychain for consensus (e.q. creating balancing groups). CO2 footprint of a meter gets provided (as of first reading pushed).This works in conjunction with German Smart Meter Gateways (as of March 2020).
     *
     * @remarks
     *
     */
    meteringDecorator: MeteringDecorator;
    /**
     * Alternative access to Corrently OCPP Data (hosted cloud backend).
     */
    ocpp: Ocpp;
    /**
     * Alternative access to OpenMeter Data.
     */
    openMETER: OpenMETER;
    /**
     * Helper services and endpoints for smarthome and home automation systems.
     */
    smartHome: SmartHome;
    /**
     * Self-Service to create a full receipt (Quittung) for energy delivery in case of submetering. Please refer to [Strom-Quittung](http://strom-quittung.de) for a sample usage.
     *
     * @remarks
     *
     */
    stromQuittung: StromQuittung;
    /**
     * Managing accounts and balances for market partners (eq. households, grid operators, traders,..) Stromkonto is based on distributed ledger technology (AKA Blockchain). Instead of using the REST Api to access any energy ledger, you might act as a blockchain node and use the published ABI definitions to get the same results and/or run transactions directly.
     *
     * @remarks
     *
     */
    stromkontoLedger: StromkontoLedger;
    /**
     * Technische Sicherheitseinrichtung - use in context of strom-quittungen to get digitaly signed receipts.
     */
    tse: Tse;
    /**
     * Tariff information for the German market region. Provides base price and energy price information for private households (Standardlastprofil H0, SLP H0 Tarifinformation).
     */
    tariffPriceAPI: TariffPriceAPI;
    /**
     * Access to status information of an existing metering change and allocation process.
     */
    wiMWechselprozesseImMesswesenStromStatusAPI: WiMWechselprozesseImMesswesenStromStatusAPI;
    /**
     * Alternative access to EASEE.cloud Data.
     */
    easee: Easee;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
