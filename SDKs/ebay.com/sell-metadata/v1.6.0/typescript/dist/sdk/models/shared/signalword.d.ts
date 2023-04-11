import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that describes signal words for hazardous materials labels.
 */
export declare class SignalWord extends SpeakeasyBase {
    /**
     * The description of the signal word localized to the default language of the marketplace. For more information, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Signal'>Signal word information</a>.
     */
    signalWordDescription?: string;
    /**
     * The identifier of the signal word. For more information, see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Signal'>Signal word information</a>.
     */
    signalWordId?: string;
}
