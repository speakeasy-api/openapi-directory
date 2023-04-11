import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldCompact } from "./customfieldcompact";
import { CustomFieldSettingResponse } from "./customfieldsettingresponse";
import { UserCompact } from "./usercompact";
/**
 * Color of the portfolio.
 */
export declare enum PortfolioResponseColorEnum {
    DarkPink = "dark-pink",
    DarkGreen = "dark-green",
    DarkBlue = "dark-blue",
    DarkRed = "dark-red",
    DarkTeal = "dark-teal",
    DarkBrown = "dark-brown",
    DarkOrange = "dark-orange",
    DarkPurple = "dark-purple",
    DarkWarmGray = "dark-warm-gray",
    LightPink = "light-pink",
    LightGreen = "light-green",
    LightBlue = "light-blue",
    LightRed = "light-red",
    LightTeal = "light-teal",
    LightBrown = "light-brown",
    LightOrange = "light-orange",
    LightPurple = "light-purple",
    LightWarmGray = "light-warm-gray"
}
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The `resource_subtype`s for `status` objects represent the type of their parent.
 */
export declare enum PortfolioResponseCurrentStatusUpdateResourceSubtypeEnum {
    ProjectStatusUpdate = "project_status_update",
    PortfolioStatusUpdate = "portfolio_status_update",
    GoalStatusUpdate = "goal_status_update"
}
/**
 * A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent's followers when created. These updates include both text describing the update and a `status_type` intended to represent the overall state of the project.
 */
export declare class PortfolioResponseCurrentStatusUpdate extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The `resource_subtype`s for `status` objects represent the type of their parent.
     */
    resourceSubtype?: PortfolioResponseCurrentStatusUpdateResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The title of the status update.
     */
    title?: string;
}
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 */
export declare class PortfolioResponseWorkspace extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the workspace.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.
 *
 * @remarks
 * Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a max of 20 custom fields.
 */
export declare class PortfolioResponse extends SpeakeasyBase {
    /**
     * Color of the portfolio.
     */
    color?: PortfolioResponseColorEnum;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    createdBy?: UserCompact;
    /**
     * The latest `status_update` posted to this portfolio.
     */
    currentStatusUpdate?: PortfolioResponseCurrentStatusUpdate;
    /**
     * Array of custom field settings applied to the portfolio.
     */
    customFieldSettings?: CustomFieldSettingResponse[];
    /**
     * Array of Custom Fields.
     */
    customFields?: CustomFieldCompact[];
    /**
     * The localized day on which this portfolio is due. This takes a date with format YYYY-MM-DD.
     */
    dueOn?: Date;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    members?: UserCompact[];
    /**
     * The name of the portfolio.
     */
    name?: string;
    owner?: UserCompact;
    /**
     * A url that points directly to the object within Asana.
     */
    permalinkUrl?: string;
    /**
     * True if the portfolio is public to its workspace members.
     */
    public?: boolean;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The day on which work for this portfolio begins, or null if the portfolio has no start date. This takes a date with `YYYY-MM-DD` format. *Note: `due_on` must be present in the request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and `due_on` cannot be the same date.*
     */
    startOn?: Date;
    workspace?: PortfolioResponseWorkspace;
}
