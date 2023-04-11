import { SpeakeasyBase } from "../../../internal/utils";
import { HealthEventStatusEnum } from "./healtheventstatusenum";
import { InternetHealth } from "./internethealth";
import { NetworkImpairment } from "./networkimpairment";
/**
 * <p>Information about a location impacted by a health event in Amazon CloudWatch Internet Monitor.</p> <p>Geographic regions are hierarchically categorized into country, subdivision, metro and city geographic granularities. The geographic region is identified based on the IP address used at the client locations.</p>
 */
export declare class ImpactedLocation extends SpeakeasyBase {
    asName: string;
    asNumber: number;
    causedBy?: NetworkImpairment;
    city?: string;
    country: string;
    countryCode?: string;
    internetHealth?: InternetHealth;
    latitude?: number;
    longitude?: number;
    metro?: string;
    serviceLocation?: string;
    status: HealthEventStatusEnum;
    subdivision?: string;
    subdivisionCode?: string;
}
