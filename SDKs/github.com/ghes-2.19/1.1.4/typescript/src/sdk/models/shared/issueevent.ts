/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthorAssociationEnum } from "./authorassociationenum";
import { IssueEventDismissedReview } from "./issueeventdismissedreview";
import { IssueEventLabel } from "./issueeventlabel";
import { IssueEventMilestone } from "./issueeventmilestone";
import { IssueEventProjectCard } from "./issueeventprojectcard";
import { IssueEventRename } from "./issueeventrename";
import { IssueSimple } from "./issuesimple";
import { NullableIntegration } from "./nullableintegration";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Team } from "./team";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Issue Event
 */
export class IssueEvent extends SpeakeasyBase {
  /**
   * Simple User
   */
  @SpeakeasyMetadata()
  @Expose({ name: "actor" })
  @Type(() => NullableSimpleUser)
  actor: NullableSimpleUser;

  /**
   * Simple User
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assignee" })
  @Type(() => NullableSimpleUser)
  assignee?: NullableSimpleUser;

  /**
   * Simple User
   */
  @SpeakeasyMetadata()
  @Expose({ name: "assigner" })
  @Type(() => NullableSimpleUser)
  assigner?: NullableSimpleUser;

  /**
   * How the author is associated with the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "author_association" })
  authorAssociation?: AuthorAssociationEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "commit_id" })
  commitId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commit_url" })
  commitUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "dismissed_review" })
  @Type(() => IssueEventDismissedReview)
  dismissedReview?: IssueEventDismissedReview;

  @SpeakeasyMetadata()
  @Expose({ name: "event" })
  event: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  /**
   * Issue Simple
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issue" })
  @Type(() => IssueSimple)
  issue?: IssueSimple;

  /**
   * Issue Event Label
   */
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  @Type(() => IssueEventLabel)
  label?: IssueEventLabel;

  @SpeakeasyMetadata()
  @Expose({ name: "lock_reason" })
  lockReason?: string;

  /**
   * Issue Event Milestone
   */
  @SpeakeasyMetadata()
  @Expose({ name: "milestone" })
  @Type(() => IssueEventMilestone)
  milestone?: IssueEventMilestone;

  @SpeakeasyMetadata()
  @Expose({ name: "node_id" })
  nodeId: string;

  /**
   * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "performed_via_github_app" })
  @Type(() => NullableIntegration)
  performedViaGithubApp?: NullableIntegration;

  /**
   * Issue Event Project Card
   */
  @SpeakeasyMetadata()
  @Expose({ name: "project_card" })
  @Type(() => IssueEventProjectCard)
  projectCard?: IssueEventProjectCard;

  /**
   * Issue Event Rename
   */
  @SpeakeasyMetadata()
  @Expose({ name: "rename" })
  @Type(() => IssueEventRename)
  rename?: IssueEventRename;

  /**
   * Simple User
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requested_reviewer" })
  @Type(() => NullableSimpleUser)
  requestedReviewer?: NullableSimpleUser;

  /**
   * Groups of organization members that gives permissions on specified repositories.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requested_team" })
  @Type(() => Team)
  requestedTeam?: Team;

  /**
   * Simple User
   */
  @SpeakeasyMetadata()
  @Expose({ name: "review_requester" })
  @Type(() => NullableSimpleUser)
  reviewRequester?: NullableSimpleUser;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}
