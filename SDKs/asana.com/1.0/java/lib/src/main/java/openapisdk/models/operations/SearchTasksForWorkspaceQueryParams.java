package openapisdk.models.operations;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTasksForWorkspaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assigned_by.any")
    public String assignedByAny;
    public SearchTasksForWorkspaceQueryParams withAssignedByAny(String assignedByAny) {
        this.assignedByAny = assignedByAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assigned_by.not")
    public String assignedByNot;
    public SearchTasksForWorkspaceQueryParams withAssignedByNot(String assignedByNot) {
        this.assignedByNot = assignedByNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee.any")
    public String assigneeAny;
    public SearchTasksForWorkspaceQueryParams withAssigneeAny(String assigneeAny) {
        this.assigneeAny = assigneeAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee.not")
    public String assigneeNot;
    public SearchTasksForWorkspaceQueryParams withAssigneeNot(String assigneeNot) {
        this.assigneeNot = assigneeNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=commented_on_by.any")
    public String commentedOnByAny;
    public SearchTasksForWorkspaceQueryParams withCommentedOnByAny(String commentedOnByAny) {
        this.commentedOnByAny = commentedOnByAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=commented_on_by.not")
    public String commentedOnByNot;
    public SearchTasksForWorkspaceQueryParams withCommentedOnByNot(String commentedOnByNot) {
        this.commentedOnByNot = commentedOnByNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed")
    public Boolean completed;
    public SearchTasksForWorkspaceQueryParams withCompleted(Boolean completed) {
        this.completed = completed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed_at.after")
    public OffsetDateTime completedAtAfter;
    public SearchTasksForWorkspaceQueryParams withCompletedAtAfter(OffsetDateTime completedAtAfter) {
        this.completedAtAfter = completedAtAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed_at.before")
    public OffsetDateTime completedAtBefore;
    public SearchTasksForWorkspaceQueryParams withCompletedAtBefore(OffsetDateTime completedAtBefore) {
        this.completedAtBefore = completedAtBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed_on")
    public LocalDate completedOn;
    public SearchTasksForWorkspaceQueryParams withCompletedOn(LocalDate completedOn) {
        this.completedOn = completedOn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed_on.after")
    public LocalDate completedOnAfter;
    public SearchTasksForWorkspaceQueryParams withCompletedOnAfter(LocalDate completedOnAfter) {
        this.completedOnAfter = completedOnAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed_on.before")
    public LocalDate completedOnBefore;
    public SearchTasksForWorkspaceQueryParams withCompletedOnBefore(LocalDate completedOnBefore) {
        this.completedOnBefore = completedOnBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at.after")
    public OffsetDateTime createdAtAfter;
    public SearchTasksForWorkspaceQueryParams withCreatedAtAfter(OffsetDateTime createdAtAfter) {
        this.createdAtAfter = createdAtAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_at.before")
    public OffsetDateTime createdAtBefore;
    public SearchTasksForWorkspaceQueryParams withCreatedAtBefore(OffsetDateTime createdAtBefore) {
        this.createdAtBefore = createdAtBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_by.any")
    public String createdByAny;
    public SearchTasksForWorkspaceQueryParams withCreatedByAny(String createdByAny) {
        this.createdByAny = createdByAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_by.not")
    public String createdByNot;
    public SearchTasksForWorkspaceQueryParams withCreatedByNot(String createdByNot) {
        this.createdByNot = createdByNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_on")
    public LocalDate createdOn;
    public SearchTasksForWorkspaceQueryParams withCreatedOn(LocalDate createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_on.after")
    public LocalDate createdOnAfter;
    public SearchTasksForWorkspaceQueryParams withCreatedOnAfter(LocalDate createdOnAfter) {
        this.createdOnAfter = createdOnAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_on.before")
    public LocalDate createdOnBefore;
    public SearchTasksForWorkspaceQueryParams withCreatedOnBefore(LocalDate createdOnBefore) {
        this.createdOnBefore = createdOnBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_at.after")
    public OffsetDateTime dueAtAfter;
    public SearchTasksForWorkspaceQueryParams withDueAtAfter(OffsetDateTime dueAtAfter) {
        this.dueAtAfter = dueAtAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_at.before")
    public OffsetDateTime dueAtBefore;
    public SearchTasksForWorkspaceQueryParams withDueAtBefore(OffsetDateTime dueAtBefore) {
        this.dueAtBefore = dueAtBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_on")
    public LocalDate dueOn;
    public SearchTasksForWorkspaceQueryParams withDueOn(LocalDate dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_on.after")
    public LocalDate dueOnAfter;
    public SearchTasksForWorkspaceQueryParams withDueOnAfter(LocalDate dueOnAfter) {
        this.dueOnAfter = dueOnAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_on.before")
    public LocalDate dueOnBefore;
    public SearchTasksForWorkspaceQueryParams withDueOnBefore(LocalDate dueOnBefore) {
        this.dueOnBefore = dueOnBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=followers.any")
    public String followersAny;
    public SearchTasksForWorkspaceQueryParams withFollowersAny(String followersAny) {
        this.followersAny = followersAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=followers.not")
    public String followersNot;
    public SearchTasksForWorkspaceQueryParams withFollowersNot(String followersNot) {
        this.followersNot = followersNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_attachment")
    public Boolean hasAttachment;
    public SearchTasksForWorkspaceQueryParams withHasAttachment(Boolean hasAttachment) {
        this.hasAttachment = hasAttachment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_blocked")
    public Boolean isBlocked;
    public SearchTasksForWorkspaceQueryParams withIsBlocked(Boolean isBlocked) {
        this.isBlocked = isBlocked;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_blocking")
    public Boolean isBlocking;
    public SearchTasksForWorkspaceQueryParams withIsBlocking(Boolean isBlocking) {
        this.isBlocking = isBlocking;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=is_subtask")
    public Boolean isSubtask;
    public SearchTasksForWorkspaceQueryParams withIsSubtask(Boolean isSubtask) {
        this.isSubtask = isSubtask;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=liked_by.any")
    public String likedByAny;
    public SearchTasksForWorkspaceQueryParams withLikedByAny(String likedByAny) {
        this.likedByAny = likedByAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=liked_by.not")
    public String likedByNot;
    public SearchTasksForWorkspaceQueryParams withLikedByNot(String likedByNot) {
        this.likedByNot = likedByNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_at.after")
    public OffsetDateTime modifiedAtAfter;
    public SearchTasksForWorkspaceQueryParams withModifiedAtAfter(OffsetDateTime modifiedAtAfter) {
        this.modifiedAtAfter = modifiedAtAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_at.before")
    public OffsetDateTime modifiedAtBefore;
    public SearchTasksForWorkspaceQueryParams withModifiedAtBefore(OffsetDateTime modifiedAtBefore) {
        this.modifiedAtBefore = modifiedAtBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_on")
    public LocalDate modifiedOn;
    public SearchTasksForWorkspaceQueryParams withModifiedOn(LocalDate modifiedOn) {
        this.modifiedOn = modifiedOn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_on.after")
    public LocalDate modifiedOnAfter;
    public SearchTasksForWorkspaceQueryParams withModifiedOnAfter(LocalDate modifiedOnAfter) {
        this.modifiedOnAfter = modifiedOnAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_on.before")
    public LocalDate modifiedOnBefore;
    public SearchTasksForWorkspaceQueryParams withModifiedOnBefore(LocalDate modifiedOnBefore) {
        this.modifiedOnBefore = modifiedOnBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public SearchTasksForWorkspaceQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public SearchTasksForWorkspaceQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=portfolios.any")
    public String portfoliosAny;
    public SearchTasksForWorkspaceQueryParams withPortfoliosAny(String portfoliosAny) {
        this.portfoliosAny = portfoliosAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projects.all")
    public String projectsAll;
    public SearchTasksForWorkspaceQueryParams withProjectsAll(String projectsAll) {
        this.projectsAll = projectsAll;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projects.any")
    public String projectsAny;
    public SearchTasksForWorkspaceQueryParams withProjectsAny(String projectsAny) {
        this.projectsAny = projectsAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projects.not")
    public String projectsNot;
    public SearchTasksForWorkspaceQueryParams withProjectsNot(String projectsNot) {
        this.projectsNot = projectsNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resource_subtype")
    public openapisdk.models.shared.FieldsEnum1 resourceSubtype;
    public SearchTasksForWorkspaceQueryParams withResourceSubtype(openapisdk.models.shared.FieldsEnum1 resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sections.all")
    public String sectionsAll;
    public SearchTasksForWorkspaceQueryParams withSectionsAll(String sectionsAll) {
        this.sectionsAll = sectionsAll;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sections.any")
    public String sectionsAny;
    public SearchTasksForWorkspaceQueryParams withSectionsAny(String sectionsAny) {
        this.sectionsAny = sectionsAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sections.not")
    public String sectionsNot;
    public SearchTasksForWorkspaceQueryParams withSectionsNot(String sectionsNot) {
        this.sectionsNot = sectionsNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_ascending")
    public Boolean sortAscending;
    public SearchTasksForWorkspaceQueryParams withSortAscending(Boolean sortAscending) {
        this.sortAscending = sortAscending;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_by")
    public openapisdk.models.shared.FieldsEnum2 sortBy;
    public SearchTasksForWorkspaceQueryParams withSortBy(openapisdk.models.shared.FieldsEnum2 sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_on")
    public LocalDate startOn;
    public SearchTasksForWorkspaceQueryParams withStartOn(LocalDate startOn) {
        this.startOn = startOn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_on.after")
    public LocalDate startOnAfter;
    public SearchTasksForWorkspaceQueryParams withStartOnAfter(LocalDate startOnAfter) {
        this.startOnAfter = startOnAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_on.before")
    public LocalDate startOnBefore;
    public SearchTasksForWorkspaceQueryParams withStartOnBefore(LocalDate startOnBefore) {
        this.startOnBefore = startOnBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags.all")
    public String tagsAll;
    public SearchTasksForWorkspaceQueryParams withTagsAll(String tagsAll) {
        this.tagsAll = tagsAll;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags.any")
    public String tagsAny;
    public SearchTasksForWorkspaceQueryParams withTagsAny(String tagsAny) {
        this.tagsAny = tagsAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags.not")
    public String tagsNot;
    public SearchTasksForWorkspaceQueryParams withTagsNot(String tagsNot) {
        this.tagsNot = tagsNot;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=teams.any")
    public String teamsAny;
    public SearchTasksForWorkspaceQueryParams withTeamsAny(String teamsAny) {
        this.teamsAny = teamsAny;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTasksForWorkspaceQueryParams withText(String text) {
        this.text = text;
        return this;
    }
}