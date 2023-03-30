# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/asana.com/1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: &shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        }),
    )

    req := operations.CreateAttachmentForObjectRequest{
        QueryParams: operations.CreateAttachmentForObjectQueryParams{
            OptFields: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            OptPretty: false,
        },
        Request: shared.AttachmentRequest{
            ConnectToApp: false,
            File: &shared.AttachmentRequestFile{
                Content: []byte("unde"),
                File: "nulla",
            },
            Name: "corrupti",
            Parent: "illum",
            ResourceSubtype: "external",
            URL: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.Attachments.CreateAttachmentForObject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAttachmentForObject200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Attachments

* `CreateAttachmentForObject` - Upload an attachment
* `DeleteAttachment` - Delete an attachment
* `GetAttachment` - Get an attachment
* `GetAttachmentsForObject` - Get attachments from an object

### AuditLogAPI

* `GetAuditLogEvents` - Get audit log events

### BatchAPI

* `CreateBatchRequest` - Submit parallel requests

### CustomFieldSettings

* `GetCustomFieldSettingsForPortfolio` - Get a portfolio's custom fields
* `GetCustomFieldSettingsForProject` - Get a project's custom fields

### CustomFields

* `CreateCustomField` - Create a custom field
* `CreateEnumOptionForCustomField` - Create an enum option
* `DeleteCustomField` - Delete a custom field
* `GetCustomField` - Get a custom field
* `GetCustomFieldsForWorkspace` - Get a workspace's custom fields
* `InsertEnumOptionForCustomField` - Reorder a custom field's enum
* `UpdateCustomField` - Update a custom field
* `UpdateEnumOption` - Update an enum option

### Events

* `GetEvents` - Get events on a resource

### GoalRelationships

* `AddSupportingRelationship` - Add a supporting goal relationship
* `GetGoalRelationship` - Get a goal relationship
* `GetGoalRelationships` - Get goal relationships
* `RemoveSupportingRelationship` - Removes a supporting goal relationship
* `UpdateGoalRelationship` - Update a goal relationship

### Goals

* `AddFollowers` - Add a collaborator to a goal
* `CreateGoal` - Create a goal
* `CreateGoalMetric` - Create a goal metric
* `DeleteGoal` - Delete a goal
* `GetGoal` - Get a goal
* `GetGoals` - Get goals
* `GetParentGoalsForGoal` - Get parent goals from a goal
* `RemoveFollowers` - Remove a collaborator from a goal
* `UpdateGoal` - Update a goal
* `UpdateGoalMetric` - Update a goal metric

### Jobs

* `GetJob` - Get a job by id

### OrganizationExports

* `CreateOrganizationExport` - Create an organization export request
* `GetOrganizationExport` - Get details on an org export request

### PortfolioMemberships

* `GetPortfolioMembership` - Get a portfolio membership
* `GetPortfolioMemberships` - Get multiple portfolio memberships
* `GetPortfolioMembershipsForPortfolio` - Get memberships from a portfolio

### Portfolios

* `AddCustomFieldSettingForPortfolio` - Add a custom field to a portfolio
* `AddItemForPortfolio` - Add a portfolio item
* `AddMembersForPortfolio` - Add users to a portfolio
* `CreatePortfolio` - Create a portfolio
* `DeletePortfolio` - Delete a portfolio
* `GetItemsForPortfolio` - Get portfolio items
* `GetPortfolio` - Get a portfolio
* `GetPortfolios` - Get multiple portfolios
* `RemoveCustomFieldSettingForPortfolio` - Remove a custom field from a portfolio
* `RemoveItemForPortfolio` - Remove a portfolio item
* `RemoveMembersForPortfolio` - Remove users from a portfolio
* `UpdatePortfolio` - Update a portfolio

### ProjectBriefs

* `CreateProjectBrief` - Create a project brief
* `DeleteProjectBrief` - Delete a project brief
* `GetProjectBrief` - Get a project brief
* `UpdateProjectBrief` - Update a project brief

### ProjectMemberships

* `GetProjectMembership` - Get a project membership
* `GetProjectMembershipsForProject` - Get memberships from a project

### ProjectStatuses

* `CreateProjectStatusForProject` - Create a project status
* `DeleteProjectStatus` - Delete a project status
* `GetProjectStatus` - Get a project status
* `GetProjectStatusesForProject` - Get statuses from a project

### ProjectTemplates

* `GetProjectTemplate` - Get a project template
* `GetProjectTemplates` - Get multiple project templates
* `GetProjectTemplatesForTeam` - Get a team's project templates
* `InstantiateProject` - Instantiate a project from a project template

### Projects

* `AddCustomFieldSettingForProject` - Add a custom field to a project
* `AddFollowersForProject` - Add followers to a project
* `AddMembersForProject` - Add users to a project
* `CreateProject` - Create a project
* `CreateProjectForTeam` - Create a project in a team
* `CreateProjectForWorkspace` - Create a project in a workspace
* `DeleteProject` - Delete a project
* `DuplicateProject` - Duplicate a project
* `GetProject` - Get a project
* `GetProjects` - Get multiple projects
* `GetProjectsForTask` - Get projects a task is in
* `GetProjectsForTeam` - Get a team's projects
* `GetProjectsForWorkspace` - Get all projects in a workspace
* `GetTaskCountsForProject` - Get task count of a project
* `ProjectSaveAsTemplate` - Create a project template from a project
* `RemoveCustomFieldSettingForProject` - Remove a custom field from a project
* `RemoveFollowersForProject` - Remove followers from a project
* `RemoveMembersForProject` - Remove users from a project
* `UpdateProject` - Update a project

### Sections

* `AddTaskForSection` - Add task to section
* `CreateSectionForProject` - Create a section in a project
* `DeleteSection` - Delete a section
* `GetSection` - Get a section
* `GetSectionsForProject` - Get sections in a project
* `InsertSectionForProject` - Move or Insert sections
* `UpdateSection` - Update a section

### StatusUpdates

* `CreateStatusForObject` - Create a status update
* `DeleteStatus` - Delete a status update
* `GetStatus` - Get a status update
* `GetStatusesForObject` - Get status updates from an object

### Stories

* `CreateStoryForTask` - Create a story on a task
* `DeleteStory` - Delete a story
* `GetStoriesForTask` - Get stories from a task
* `GetStory` - Get a story
* `UpdateStory` - Update a story

### Tags

* `CreateTag` - Create a tag
* `CreateTagForWorkspace` - Create a tag in a workspace
* `DeleteTag` - Delete a tag
* `GetTag` - Get a tag
* `GetTags` - Get multiple tags
* `GetTagsForTask` - Get a task's tags
* `GetTagsForWorkspace` - Get tags in a workspace
* `UpdateTag` - Update a tag

### Tasks

* `AddDependenciesForTask` - Set dependencies for a task
* `AddDependentsForTask` - Set dependents for a task
* `AddFollowersForTask` - Add followers to a task
* `AddProjectForTask` - Add a project to a task
* `AddTagForTask` - Add a tag to a task
* `CreateSubtaskForTask` - Create a subtask
* `CreateTask` - Create a task
* `DeleteTask` - Delete a task
* `DuplicateTask` - Duplicate a task
* `GetDependenciesForTask` - Get dependencies from a task
* `GetDependentsForTask` - Get dependents from a task
* `GetSubtasksForTask` - Get subtasks from a task
* `GetTask` - Get a task
* `GetTasks` - Get multiple tasks
* `GetTasksForProject` - Get tasks from a project
* `GetTasksForSection` - Get tasks from a section
* `GetTasksForTag` - Get tasks from a tag
* `GetTasksForUserTaskList` - Get tasks from a user task list
* `RemoveDependenciesForTask` - Unlink dependencies from a task
* `RemoveDependentsForTask` - Unlink dependents from a task
* `RemoveFollowerForTask` - Remove followers from a task
* `RemoveProjectForTask` - Remove a project from a task
* `RemoveTagForTask` - Remove a tag from a task
* `SearchTasksForWorkspace` - Search tasks in a workspace
* `SetParentForTask` - Set the parent of a task
* `UpdateTask` - Update a task

### TeamMemberships

* `GetTeamMembership` - Get a team membership
* `GetTeamMemberships` - Get team memberships
* `GetTeamMembershipsForTeam` - Get memberships from a team
* `GetTeamMembershipsForUser` - Get memberships from a user

### Teams

* `AddUserForTeam` - Add a user to a team
* `CreateTeam` - Create a team
* `GetTeam` - Get a team
* `GetTeamsForUser` - Get teams for a user
* `GetTeamsForWorkspace` - Get teams in a workspace
* `RemoveUserForTeam` - Remove a user from a team
* `UpdateTeam` - Update a team

### TimePeriods

* `GetTimePeriod` - Get a time period
* `GetTimePeriods` - Get time periods

### Typeahead

* `TypeaheadForWorkspace` - Get objects via typeahead

### UserTaskLists

* `GetUserTaskList` - Get a user task list
* `GetUserTaskListForUser` - Get a user's task list

### Users

* `GetFavoritesForUser` - Get a user's favorites
* `GetUser` - Get a user
* `GetUsers` - Get multiple users
* `GetUsersForTeam` - Get users in a team
* `GetUsersForWorkspace` - Get users in a workspace or organization

### Webhooks

* `CreateWebhook` - Establish a webhook
* `DeleteWebhook` - Delete a webhook
* `GetWebhook` - Get a webhook
* `GetWebhooks` - Get multiple webhooks
* `UpdateWebhook` - Update a webhook

### WorkspaceMemberships

* `GetWorkspaceMembership` - Get a workspace membership
* `GetWorkspaceMembershipsForUser` - Get workspace memberships for a user
* `GetWorkspaceMembershipsForWorkspace` - Get the workspace memberships for a workspace

### Workspaces

* `AddUserForWorkspace` - Add a user to a workspace or organization
* `GetWorkspace` - Get a workspace
* `GetWorkspaces` - Get multiple workspaces
* `RemoveUserForWorkspace` - Remove a user from a workspace or organization
* `UpdateWorkspace` - Update a workspace
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
