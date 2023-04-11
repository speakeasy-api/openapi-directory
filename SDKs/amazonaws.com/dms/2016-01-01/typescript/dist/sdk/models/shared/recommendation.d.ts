import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationData } from "./recommendationdata";
import { RecommendationSettings } from "./recommendationsettings";
/**
 * <p>Provides information that describes a recommendation of a target engine.</p> <p>A <i>recommendation</i> is a set of possible Amazon Web Services target engines that you can choose to migrate your source on-premises database. In this set, Fleet Advisor suggests a single target engine as the right sized migration destination. To determine this rightsized migration destination, Fleet Advisor uses the inventory metadata and metrics from data collector. You can use recommendations before the start of migration to save costs and reduce risks.</p> <p>With recommendations, you can explore different target options and compare metrics, so you can make an informed decision when you choose the migration target.</p>
 */
export declare class Recommendation extends SpeakeasyBase {
    createdDate?: string;
    data?: RecommendationData;
    databaseId?: string;
    engineName?: string;
    preferred?: boolean;
    settings?: RecommendationSettings;
    status?: string;
}
