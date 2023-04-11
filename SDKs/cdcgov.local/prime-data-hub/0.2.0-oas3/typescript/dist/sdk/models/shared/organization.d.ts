import { SpeakeasyBase } from "../../../internal/utils";
import { SettingMetadata } from "./settingmetadata";
export declare enum OrganizationJurisdictionEnum {
    National = "National",
    State = "State",
    County = "County"
}
/**
 * An organization connected to data hub
 */
export declare class OrganizationInput extends SpeakeasyBase {
    /**
     * the county name (must match FIPS name)
     */
    countyName?: string;
    /**
     * the displayable description of the organization
     */
    description: string;
    jurisdiction: OrganizationJurisdictionEnum;
    /**
     * the unique id for the organization
     */
    name: string;
    /**
     * the two letter code for the organization
     */
    stateCode?: string;
}
/**
 * An organization connected to data hub
 */
export declare class Organization extends SpeakeasyBase {
    /**
     * the county name (must match FIPS name)
     */
    countyName?: string;
    /**
     * the displayable description of the organization
     */
    description: string;
    jurisdiction: OrganizationJurisdictionEnum;
    /**
     * The metadata associated with an setting
     */
    meta?: SettingMetadata;
    /**
     * the unique id for the organization
     */
    name: string;
    /**
     * the two letter code for the organization
     */
    stateCode?: string;
}
