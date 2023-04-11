import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.
 *
 * @remarks
 * Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a max of 20 custom fields.
 */
export declare class PortfolioCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the portfolio.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
