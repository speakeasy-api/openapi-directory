import { SpeakeasyBase } from "../../../internal/utils";
import { AppConfigDisplay } from "./appconfigdisplay";
import { AppConfigGeneral } from "./appconfiggeneral";
import { AppConfigI18n } from "./appconfigi18n";
import { AppConfigLinear } from "./appconfiglinear";
import { AppConfigPlayback } from "./appconfigplayback";
import { AppConfigSubscription } from "./appconfigsubscription";
import { Classification } from "./classification";
import { Navigation } from "./navigation";
import { PageSummary } from "./pagesummary";
/**
 * The list of available pages
 */
export declare class AppConfig extends SpeakeasyBase {
    /**
     * The map of classification ratings.
     */
    classification?: Record<string, Classification>;
    display?: AppConfigDisplay;
    general?: AppConfigGeneral;
    i18n?: AppConfigI18n;
    linear?: AppConfigLinear;
    navigation?: Navigation;
    playback?: AppConfigPlayback;
    sitemap?: PageSummary[];
    subscription?: AppConfigSubscription;
}
