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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: sdk.String("Bearer YOUR_ACCESS_TOKEN_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Attachments.CreateAttachmentForObject(ctx, operations.CreateAttachmentForObjectRequest{
        AttachmentRequest: shared.AttachmentRequest{
            ConnectToApp: sdk.Bool(false),
            File: &shared.AttachmentRequestFile{
                Content: []byte("corrupti"),
                File: "provident",
            },
            Name: sdk.String("Ellis Mitchell"),
            Parent: sdk.String("illum"),
            ResourceSubtype: shared.AttachmentRequestResourceSubtypeEnumExternal.ToPointer(),
            URL: sdk.String("vel"),
        },
        OptFields: []string{
            "deserunt",
            "suscipit",
            "iure",
        },
        OptPretty: sdk.Bool(false),
    })
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
## Available Resources and Operations


### [Attachments](docs/attachments/README.md)

* [CreateAttachmentForObject](docs/attachments/README.md#createattachmentforobject) - Upload an attachment
* [DeleteAttachment](docs/attachments/README.md#deleteattachment) - Delete an attachment
* [GetAttachment](docs/attachments/README.md#getattachment) - Get an attachment
* [GetAttachmentsForObject](docs/attachments/README.md#getattachmentsforobject) - Get attachments from an object

### [AuditLogAPI](docs/auditlogapi/README.md)

* [GetAuditLogEvents](docs/auditlogapi/README.md#getauditlogevents) - Get audit log events

### [BatchAPI](docs/batchapi/README.md)

* [CreateBatchRequest](docs/batchapi/README.md#createbatchrequest) - Submit parallel requests

### [CustomFieldSettings](docs/customfieldsettings/README.md)

* [GetCustomFieldSettingsForPortfolio](docs/customfieldsettings/README.md#getcustomfieldsettingsforportfolio) - Get a portfolio's custom fields
* [GetCustomFieldSettingsForProject](docs/customfieldsettings/README.md#getcustomfieldsettingsforproject) - Get a project's custom fields

### [CustomFields](docs/customfields/README.md)

* [CreateCustomField](docs/customfields/README.md#createcustomfield) - Create a custom field
* [CreateEnumOptionForCustomField](docs/customfields/README.md#createenumoptionforcustomfield) - Create an enum option
* [DeleteCustomField](docs/customfields/README.md#deletecustomfield) - Delete a custom field
* [GetCustomField](docs/customfields/README.md#getcustomfield) - Get a custom field
* [GetCustomFieldsForWorkspace](docs/customfields/README.md#getcustomfieldsforworkspace) - Get a workspace's custom fields
* [InsertEnumOptionForCustomField](docs/customfields/README.md#insertenumoptionforcustomfield) - Reorder a custom field's enum
* [UpdateCustomField](docs/customfields/README.md#updatecustomfield) - Update a custom field
* [UpdateEnumOption](docs/customfields/README.md#updateenumoption) - Update an enum option

### [Events](docs/events/README.md)

* [GetEvents](docs/events/README.md#getevents) - Get events on a resource

### [GoalRelationships](docs/goalrelationships/README.md)

* [AddSupportingRelationship](docs/goalrelationships/README.md#addsupportingrelationship) - Add a supporting goal relationship
* [GetGoalRelationship](docs/goalrelationships/README.md#getgoalrelationship) - Get a goal relationship
* [GetGoalRelationships](docs/goalrelationships/README.md#getgoalrelationships) - Get goal relationships
* [RemoveSupportingRelationship](docs/goalrelationships/README.md#removesupportingrelationship) - Removes a supporting goal relationship
* [UpdateGoalRelationship](docs/goalrelationships/README.md#updategoalrelationship) - Update a goal relationship

### [Goals](docs/goals/README.md)

* [AddFollowers](docs/goals/README.md#addfollowers) - Add a collaborator to a goal
* [CreateGoal](docs/goals/README.md#creategoal) - Create a goal
* [CreateGoalMetric](docs/goals/README.md#creategoalmetric) - Create a goal metric
* [DeleteGoal](docs/goals/README.md#deletegoal) - Delete a goal
* [GetGoal](docs/goals/README.md#getgoal) - Get a goal
* [GetGoals](docs/goals/README.md#getgoals) - Get goals
* [GetParentGoalsForGoal](docs/goals/README.md#getparentgoalsforgoal) - Get parent goals from a goal
* [RemoveFollowers](docs/goals/README.md#removefollowers) - Remove a collaborator from a goal
* [UpdateGoal](docs/goals/README.md#updategoal) - Update a goal
* [UpdateGoalMetric](docs/goals/README.md#updategoalmetric) - Update a goal metric

### [Jobs](docs/jobs/README.md)

* [GetJob](docs/jobs/README.md#getjob) - Get a job by id

### [OrganizationExports](docs/organizationexports/README.md)

* [CreateOrganizationExport](docs/organizationexports/README.md#createorganizationexport) - Create an organization export request
* [GetOrganizationExport](docs/organizationexports/README.md#getorganizationexport) - Get details on an org export request

### [PortfolioMemberships](docs/portfoliomemberships/README.md)

* [GetPortfolioMembership](docs/portfoliomemberships/README.md#getportfoliomembership) - Get a portfolio membership
* [GetPortfolioMemberships](docs/portfoliomemberships/README.md#getportfoliomemberships) - Get multiple portfolio memberships
* [GetPortfolioMembershipsForPortfolio](docs/portfoliomemberships/README.md#getportfoliomembershipsforportfolio) - Get memberships from a portfolio

### [Portfolios](docs/portfolios/README.md)

* [AddCustomFieldSettingForPortfolio](docs/portfolios/README.md#addcustomfieldsettingforportfolio) - Add a custom field to a portfolio
* [AddItemForPortfolio](docs/portfolios/README.md#additemforportfolio) - Add a portfolio item
* [AddMembersForPortfolio](docs/portfolios/README.md#addmembersforportfolio) - Add users to a portfolio
* [CreatePortfolio](docs/portfolios/README.md#createportfolio) - Create a portfolio
* [DeletePortfolio](docs/portfolios/README.md#deleteportfolio) - Delete a portfolio
* [GetItemsForPortfolio](docs/portfolios/README.md#getitemsforportfolio) - Get portfolio items
* [GetPortfolio](docs/portfolios/README.md#getportfolio) - Get a portfolio
* [GetPortfolios](docs/portfolios/README.md#getportfolios) - Get multiple portfolios
* [RemoveCustomFieldSettingForPortfolio](docs/portfolios/README.md#removecustomfieldsettingforportfolio) - Remove a custom field from a portfolio
* [RemoveItemForPortfolio](docs/portfolios/README.md#removeitemforportfolio) - Remove a portfolio item
* [RemoveMembersForPortfolio](docs/portfolios/README.md#removemembersforportfolio) - Remove users from a portfolio
* [UpdatePortfolio](docs/portfolios/README.md#updateportfolio) - Update a portfolio

### [ProjectBriefs](docs/projectbriefs/README.md)

* [CreateProjectBrief](docs/projectbriefs/README.md#createprojectbrief) - Create a project brief
* [DeleteProjectBrief](docs/projectbriefs/README.md#deleteprojectbrief) - Delete a project brief
* [GetProjectBrief](docs/projectbriefs/README.md#getprojectbrief) - Get a project brief
* [UpdateProjectBrief](docs/projectbriefs/README.md#updateprojectbrief) - Update a project brief

### [ProjectMemberships](docs/projectmemberships/README.md)

* [GetProjectMembership](docs/projectmemberships/README.md#getprojectmembership) - Get a project membership
* [GetProjectMembershipsForProject](docs/projectmemberships/README.md#getprojectmembershipsforproject) - Get memberships from a project

### [ProjectStatuses](docs/projectstatuses/README.md)

* [CreateProjectStatusForProject](docs/projectstatuses/README.md#createprojectstatusforproject) - Create a project status
* [DeleteProjectStatus](docs/projectstatuses/README.md#deleteprojectstatus) - Delete a project status
* [GetProjectStatus](docs/projectstatuses/README.md#getprojectstatus) - Get a project status
* [GetProjectStatusesForProject](docs/projectstatuses/README.md#getprojectstatusesforproject) - Get statuses from a project

### [ProjectTemplates](docs/projecttemplates/README.md)

* [GetProjectTemplate](docs/projecttemplates/README.md#getprojecttemplate) - Get a project template
* [GetProjectTemplates](docs/projecttemplates/README.md#getprojecttemplates) - Get multiple project templates
* [GetProjectTemplatesForTeam](docs/projecttemplates/README.md#getprojecttemplatesforteam) - Get a team's project templates
* [InstantiateProject](docs/projecttemplates/README.md#instantiateproject) - Instantiate a project from a project template

### [Projects](docs/projects/README.md)

* [AddCustomFieldSettingForProject](docs/projects/README.md#addcustomfieldsettingforproject) - Add a custom field to a project
* [AddFollowersForProject](docs/projects/README.md#addfollowersforproject) - Add followers to a project
* [AddMembersForProject](docs/projects/README.md#addmembersforproject) - Add users to a project
* [CreateProject](docs/projects/README.md#createproject) - Create a project
* [CreateProjectForTeam](docs/projects/README.md#createprojectforteam) - Create a project in a team
* [CreateProjectForWorkspace](docs/projects/README.md#createprojectforworkspace) - Create a project in a workspace
* [DeleteProject](docs/projects/README.md#deleteproject) - Delete a project
* [DuplicateProject](docs/projects/README.md#duplicateproject) - Duplicate a project
* [GetProject](docs/projects/README.md#getproject) - Get a project
* [GetProjects](docs/projects/README.md#getprojects) - Get multiple projects
* [GetProjectsForTask](docs/projects/README.md#getprojectsfortask) - Get projects a task is in
* [GetProjectsForTeam](docs/projects/README.md#getprojectsforteam) - Get a team's projects
* [GetProjectsForWorkspace](docs/projects/README.md#getprojectsforworkspace) - Get all projects in a workspace
* [GetTaskCountsForProject](docs/projects/README.md#gettaskcountsforproject) - Get task count of a project
* [ProjectSaveAsTemplate](docs/projects/README.md#projectsaveastemplate) - Create a project template from a project
* [RemoveCustomFieldSettingForProject](docs/projects/README.md#removecustomfieldsettingforproject) - Remove a custom field from a project
* [RemoveFollowersForProject](docs/projects/README.md#removefollowersforproject) - Remove followers from a project
* [RemoveMembersForProject](docs/projects/README.md#removemembersforproject) - Remove users from a project
* [UpdateProject](docs/projects/README.md#updateproject) - Update a project

### [Sections](docs/sections/README.md)

* [AddTaskForSection](docs/sections/README.md#addtaskforsection) - Add task to section
* [CreateSectionForProject](docs/sections/README.md#createsectionforproject) - Create a section in a project
* [DeleteSection](docs/sections/README.md#deletesection) - Delete a section
* [GetSection](docs/sections/README.md#getsection) - Get a section
* [GetSectionsForProject](docs/sections/README.md#getsectionsforproject) - Get sections in a project
* [InsertSectionForProject](docs/sections/README.md#insertsectionforproject) - Move or Insert sections
* [UpdateSection](docs/sections/README.md#updatesection) - Update a section

### [StatusUpdates](docs/statusupdates/README.md)

* [CreateStatusForObject](docs/statusupdates/README.md#createstatusforobject) - Create a status update
* [DeleteStatus](docs/statusupdates/README.md#deletestatus) - Delete a status update
* [GetStatus](docs/statusupdates/README.md#getstatus) - Get a status update
* [GetStatusesForObject](docs/statusupdates/README.md#getstatusesforobject) - Get status updates from an object

### [Stories](docs/stories/README.md)

* [CreateStoryForTask](docs/stories/README.md#createstoryfortask) - Create a story on a task
* [DeleteStory](docs/stories/README.md#deletestory) - Delete a story
* [GetStoriesForTask](docs/stories/README.md#getstoriesfortask) - Get stories from a task
* [GetStory](docs/stories/README.md#getstory) - Get a story
* [UpdateStory](docs/stories/README.md#updatestory) - Update a story

### [Tags](docs/tags/README.md)

* [CreateTag](docs/tags/README.md#createtag) - Create a tag
* [CreateTagForWorkspace](docs/tags/README.md#createtagforworkspace) - Create a tag in a workspace
* [DeleteTag](docs/tags/README.md#deletetag) - Delete a tag
* [GetTag](docs/tags/README.md#gettag) - Get a tag
* [GetTags](docs/tags/README.md#gettags) - Get multiple tags
* [GetTagsForTask](docs/tags/README.md#gettagsfortask) - Get a task's tags
* [GetTagsForWorkspace](docs/tags/README.md#gettagsforworkspace) - Get tags in a workspace
* [UpdateTag](docs/tags/README.md#updatetag) - Update a tag

### [Tasks](docs/tasks/README.md)

* [AddDependenciesForTask](docs/tasks/README.md#adddependenciesfortask) - Set dependencies for a task
* [AddDependentsForTask](docs/tasks/README.md#adddependentsfortask) - Set dependents for a task
* [AddFollowersForTask](docs/tasks/README.md#addfollowersfortask) - Add followers to a task
* [AddProjectForTask](docs/tasks/README.md#addprojectfortask) - Add a project to a task
* [AddTagForTask](docs/tasks/README.md#addtagfortask) - Add a tag to a task
* [CreateSubtaskForTask](docs/tasks/README.md#createsubtaskfortask) - Create a subtask
* [CreateTask](docs/tasks/README.md#createtask) - Create a task
* [DeleteTask](docs/tasks/README.md#deletetask) - Delete a task
* [DuplicateTask](docs/tasks/README.md#duplicatetask) - Duplicate a task
* [GetDependenciesForTask](docs/tasks/README.md#getdependenciesfortask) - Get dependencies from a task
* [GetDependentsForTask](docs/tasks/README.md#getdependentsfortask) - Get dependents from a task
* [GetSubtasksForTask](docs/tasks/README.md#getsubtasksfortask) - Get subtasks from a task
* [GetTask](docs/tasks/README.md#gettask) - Get a task
* [GetTasks](docs/tasks/README.md#gettasks) - Get multiple tasks
* [GetTasksForProject](docs/tasks/README.md#gettasksforproject) - Get tasks from a project
* [GetTasksForSection](docs/tasks/README.md#gettasksforsection) - Get tasks from a section
* [GetTasksForTag](docs/tasks/README.md#gettasksfortag) - Get tasks from a tag
* [GetTasksForUserTaskList](docs/tasks/README.md#gettasksforusertasklist) - Get tasks from a user task list
* [RemoveDependenciesForTask](docs/tasks/README.md#removedependenciesfortask) - Unlink dependencies from a task
* [RemoveDependentsForTask](docs/tasks/README.md#removedependentsfortask) - Unlink dependents from a task
* [RemoveFollowerForTask](docs/tasks/README.md#removefollowerfortask) - Remove followers from a task
* [RemoveProjectForTask](docs/tasks/README.md#removeprojectfortask) - Remove a project from a task
* [RemoveTagForTask](docs/tasks/README.md#removetagfortask) - Remove a tag from a task
* [SearchTasksForWorkspace](docs/tasks/README.md#searchtasksforworkspace) - Search tasks in a workspace
* [SetParentForTask](docs/tasks/README.md#setparentfortask) - Set the parent of a task
* [UpdateTask](docs/tasks/README.md#updatetask) - Update a task

### [TeamMemberships](docs/teammemberships/README.md)

* [GetTeamMembership](docs/teammemberships/README.md#getteammembership) - Get a team membership
* [GetTeamMemberships](docs/teammemberships/README.md#getteammemberships) - Get team memberships
* [GetTeamMembershipsForTeam](docs/teammemberships/README.md#getteammembershipsforteam) - Get memberships from a team
* [GetTeamMembershipsForUser](docs/teammemberships/README.md#getteammembershipsforuser) - Get memberships from a user

### [Teams](docs/teams/README.md)

* [AddUserForTeam](docs/teams/README.md#adduserforteam) - Add a user to a team
* [CreateTeam](docs/teams/README.md#createteam) - Create a team
* [GetTeam](docs/teams/README.md#getteam) - Get a team
* [GetTeamsForUser](docs/teams/README.md#getteamsforuser) - Get teams for a user
* [GetTeamsForWorkspace](docs/teams/README.md#getteamsforworkspace) - Get teams in a workspace
* [RemoveUserForTeam](docs/teams/README.md#removeuserforteam) - Remove a user from a team
* [UpdateTeam](docs/teams/README.md#updateteam) - Update a team

### [TimePeriods](docs/timeperiods/README.md)

* [GetTimePeriod](docs/timeperiods/README.md#gettimeperiod) - Get a time period
* [GetTimePeriods](docs/timeperiods/README.md#gettimeperiods) - Get time periods

### [Typeahead](docs/typeahead/README.md)

* [TypeaheadForWorkspace](docs/typeahead/README.md#typeaheadforworkspace) - Get objects via typeahead

### [UserTaskLists](docs/usertasklists/README.md)

* [GetUserTaskList](docs/usertasklists/README.md#getusertasklist) - Get a user task list
* [GetUserTaskListForUser](docs/usertasklists/README.md#getusertasklistforuser) - Get a user's task list

### [Users](docs/users/README.md)

* [GetFavoritesForUser](docs/users/README.md#getfavoritesforuser) - Get a user's favorites
* [GetUser](docs/users/README.md#getuser) - Get a user
* [GetUsers](docs/users/README.md#getusers) - Get multiple users
* [GetUsersForTeam](docs/users/README.md#getusersforteam) - Get users in a team
* [GetUsersForWorkspace](docs/users/README.md#getusersforworkspace) - Get users in a workspace or organization

### [Webhooks](docs/webhooks/README.md)

* [CreateWebhook](docs/webhooks/README.md#createwebhook) - Establish a webhook
* [DeleteWebhook](docs/webhooks/README.md#deletewebhook) - Delete a webhook
* [GetWebhook](docs/webhooks/README.md#getwebhook) - Get a webhook
* [GetWebhooks](docs/webhooks/README.md#getwebhooks) - Get multiple webhooks
* [UpdateWebhook](docs/webhooks/README.md#updatewebhook) - Update a webhook

### [WorkspaceMemberships](docs/workspacememberships/README.md)

* [GetWorkspaceMembership](docs/workspacememberships/README.md#getworkspacemembership) - Get a workspace membership
* [GetWorkspaceMembershipsForUser](docs/workspacememberships/README.md#getworkspacemembershipsforuser) - Get workspace memberships for a user
* [GetWorkspaceMembershipsForWorkspace](docs/workspacememberships/README.md#getworkspacemembershipsforworkspace) - Get the workspace memberships for a workspace

### [Workspaces](docs/workspaces/README.md)

* [AddUserForWorkspace](docs/workspaces/README.md#adduserforworkspace) - Add a user to a workspace or organization
* [GetWorkspace](docs/workspaces/README.md#getworkspace) - Get a workspace
* [GetWorkspaces](docs/workspaces/README.md#getworkspaces) - Get multiple workspaces
* [RemoveUserForWorkspace](docs/workspaces/README.md#removeuserforworkspace) - Remove a user from a workspace or organization
* [UpdateWorkspace](docs/workspaces/README.md#updateworkspace) - Update a workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
