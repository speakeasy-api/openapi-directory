import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that describes pictograms for hazardous materials labels.
 */
export declare class Pictogram extends SpeakeasyBase {
    /**
     * The description of the pictogram localized to the default language of the marketplace. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Pictogra'>Pictogram sample values</a>.
     */
    pictogramDescription?: string;
    /**
     * The identifier of the pictogram. For sample values, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Pictogra'>Pictogram sample values</a>.
     */
    pictogramId?: string;
    /**
     * The URL of the pictogram.
     */
    pictogramUrl?: string;
}
