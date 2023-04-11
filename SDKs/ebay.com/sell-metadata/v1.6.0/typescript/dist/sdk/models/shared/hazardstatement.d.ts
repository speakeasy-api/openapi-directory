import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that describes hazard statements for hazardous materials labels
 */
export declare class HazardStatement extends SpeakeasyBase {
    /**
     * The description of the statement localized to the default language of the marketplace. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Hazard'>Hazard statement sample values</a>.
     */
    statementDescription?: string;
    /**
     * The identifier of the statement. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Hazard'>Hazard statement sample values</a>.
     */
    statementId?: string;
}
