# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectRequest;
import org.openapis.openapi.models.operations.CreateAttachmentForObjectResponse;
import org.openapis.openapi.models.shared.AttachmentRequest;
import org.openapis.openapi.models.shared.AttachmentRequestFile;
import org.openapis.openapi.models.shared.AttachmentRequestResourceSubtypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateAttachmentForObjectRequest req = new CreateAttachmentForObjectRequest(                new AttachmentRequest() {{
                                connectToApp = false;
                                file = new AttachmentRequestFile("corrupti".getBytes(), "provident");;
                                name = "Ellis Mitchell";
                                parent = "illum";
                                resourceSubtype = AttachmentRequestResourceSubtypeEnum.EXTERNAL;
                                url = "vel";
                            }};) {{
                optFields = new String[]{{
                    add("deserunt"),
                    add("suscipit"),
                    add("iure"),
                }};
                optPretty = false;
            }};            

            CreateAttachmentForObjectResponse res = sdk.attachments.createAttachmentForObject(req);

            if (res.createAttachmentForObject200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [attachments](docs/attachments/README.md)

* [createAttachmentForObject](docs/attachments/README.md#createattachmentforobject) - Upload an attachment
* [deleteAttachment](docs/attachments/README.md#deleteattachment) - Delete an attachment
* [getAttachment](docs/attachments/README.md#getattachment) - Get an attachment
* [getAttachmentsForObject](docs/attachments/README.md#getattachmentsforobject) - Get attachments from an object

### [auditLogAPI](docs/auditlogapi/README.md)

* [getAuditLogEvents](docs/auditlogapi/README.md#getauditlogevents) - Get audit log events

### [batchAPI](docs/batchapi/README.md)

* [createBatchRequest](docs/batchapi/README.md#createbatchrequest) - Submit parallel requests

### [customFieldSettings](docs/customfieldsettings/README.md)

* [getCustomFieldSettingsForPortfolio](docs/customfieldsettings/README.md#getcustomfieldsettingsforportfolio) - Get a portfolio's custom fields
* [getCustomFieldSettingsForProject](docs/customfieldsettings/README.md#getcustomfieldsettingsforproject) - Get a project's custom fields

### [customFields](docs/customfields/README.md)

* [createCustomField](docs/customfields/README.md#createcustomfield) - Create a custom field
* [createEnumOptionForCustomField](docs/customfields/README.md#createenumoptionforcustomfield) - Create an enum option
* [deleteCustomField](docs/customfields/README.md#deletecustomfield) - Delete a custom field
* [getCustomField](docs/customfields/README.md#getcustomfield) - Get a custom field
* [getCustomFieldsForWorkspace](docs/customfields/README.md#getcustomfieldsforworkspace) - Get a workspace's custom fields
* [insertEnumOptionForCustomField](docs/customfields/README.md#insertenumoptionforcustomfield) - Reorder a custom field's enum
* [updateCustomField](docs/customfields/README.md#updatecustomfield) - Update a custom field
* [updateEnumOption](docs/customfields/README.md#updateenumoption) - Update an enum option

### [events](docs/events/README.md)

* [getEvents](docs/events/README.md#getevents) - Get events on a resource

### [goalRelationships](docs/goalrelationships/README.md)

* [addSupportingRelationship](docs/goalrelationships/README.md#addsupportingrelationship) - Add a supporting goal relationship
* [getGoalRelationship](docs/goalrelationships/README.md#getgoalrelationship) - Get a goal relationship
* [getGoalRelationships](docs/goalrelationships/README.md#getgoalrelationships) - Get goal relationships
* [removeSupportingRelationship](docs/goalrelationships/README.md#removesupportingrelationship) - Removes a supporting goal relationship
* [updateGoalRelationship](docs/goalrelationships/README.md#updategoalrelationship) - Update a goal relationship

### [goals](docs/goals/README.md)

* [addFollowers](docs/goals/README.md#addfollowers) - Add a collaborator to a goal
* [createGoal](docs/goals/README.md#creategoal) - Create a goal
* [createGoalMetric](docs/goals/README.md#creategoalmetric) - Create a goal metric
* [deleteGoal](docs/goals/README.md#deletegoal) - Delete a goal
* [getGoal](docs/goals/README.md#getgoal) - Get a goal
* [getGoals](docs/goals/README.md#getgoals) - Get goals
* [getParentGoalsForGoal](docs/goals/README.md#getparentgoalsforgoal) - Get parent goals from a goal
* [removeFollowers](docs/goals/README.md#removefollowers) - Remove a collaborator from a goal
* [updateGoal](docs/goals/README.md#updategoal) - Update a goal
* [updateGoalMetric](docs/goals/README.md#updategoalmetric) - Update a goal metric

### [jobs](docs/jobs/README.md)

* [getJob](docs/jobs/README.md#getjob) - Get a job by id

### [organizationExports](docs/organizationexports/README.md)

* [createOrganizationExport](docs/organizationexports/README.md#createorganizationexport) - Create an organization export request
* [getOrganizationExport](docs/organizationexports/README.md#getorganizationexport) - Get details on an org export request

### [portfolioMemberships](docs/portfoliomemberships/README.md)

* [getPortfolioMembership](docs/portfoliomemberships/README.md#getportfoliomembership) - Get a portfolio membership
* [getPortfolioMemberships](docs/portfoliomemberships/README.md#getportfoliomemberships) - Get multiple portfolio memberships
* [getPortfolioMembershipsForPortfolio](docs/portfoliomemberships/README.md#getportfoliomembershipsforportfolio) - Get memberships from a portfolio

### [portfolios](docs/portfolios/README.md)

* [addCustomFieldSettingForPortfolio](docs/portfolios/README.md#addcustomfieldsettingforportfolio) - Add a custom field to a portfolio
* [addItemForPortfolio](docs/portfolios/README.md#additemforportfolio) - Add a portfolio item
* [addMembersForPortfolio](docs/portfolios/README.md#addmembersforportfolio) - Add users to a portfolio
* [createPortfolio](docs/portfolios/README.md#createportfolio) - Create a portfolio
* [deletePortfolio](docs/portfolios/README.md#deleteportfolio) - Delete a portfolio
* [getItemsForPortfolio](docs/portfolios/README.md#getitemsforportfolio) - Get portfolio items
* [getPortfolio](docs/portfolios/README.md#getportfolio) - Get a portfolio
* [getPortfolios](docs/portfolios/README.md#getportfolios) - Get multiple portfolios
* [removeCustomFieldSettingForPortfolio](docs/portfolios/README.md#removecustomfieldsettingforportfolio) - Remove a custom field from a portfolio
* [removeItemForPortfolio](docs/portfolios/README.md#removeitemforportfolio) - Remove a portfolio item
* [removeMembersForPortfolio](docs/portfolios/README.md#removemembersforportfolio) - Remove users from a portfolio
* [updatePortfolio](docs/portfolios/README.md#updateportfolio) - Update a portfolio

### [projectBriefs](docs/projectbriefs/README.md)

* [createProjectBrief](docs/projectbriefs/README.md#createprojectbrief) - Create a project brief
* [deleteProjectBrief](docs/projectbriefs/README.md#deleteprojectbrief) - Delete a project brief
* [getProjectBrief](docs/projectbriefs/README.md#getprojectbrief) - Get a project brief
* [updateProjectBrief](docs/projectbriefs/README.md#updateprojectbrief) - Update a project brief

### [projectMemberships](docs/projectmemberships/README.md)

* [getProjectMembership](docs/projectmemberships/README.md#getprojectmembership) - Get a project membership
* [getProjectMembershipsForProject](docs/projectmemberships/README.md#getprojectmembershipsforproject) - Get memberships from a project

### [projectStatuses](docs/projectstatuses/README.md)

* [createProjectStatusForProject](docs/projectstatuses/README.md#createprojectstatusforproject) - Create a project status
* [deleteProjectStatus](docs/projectstatuses/README.md#deleteprojectstatus) - Delete a project status
* [getProjectStatus](docs/projectstatuses/README.md#getprojectstatus) - Get a project status
* [getProjectStatusesForProject](docs/projectstatuses/README.md#getprojectstatusesforproject) - Get statuses from a project

### [projectTemplates](docs/projecttemplates/README.md)

* [getProjectTemplate](docs/projecttemplates/README.md#getprojecttemplate) - Get a project template
* [getProjectTemplates](docs/projecttemplates/README.md#getprojecttemplates) - Get multiple project templates
* [getProjectTemplatesForTeam](docs/projecttemplates/README.md#getprojecttemplatesforteam) - Get a team's project templates
* [instantiateProject](docs/projecttemplates/README.md#instantiateproject) - Instantiate a project from a project template

### [projects](docs/projects/README.md)

* [addCustomFieldSettingForProject](docs/projects/README.md#addcustomfieldsettingforproject) - Add a custom field to a project
* [addFollowersForProject](docs/projects/README.md#addfollowersforproject) - Add followers to a project
* [addMembersForProject](docs/projects/README.md#addmembersforproject) - Add users to a project
* [createProject](docs/projects/README.md#createproject) - Create a project
* [createProjectForTeam](docs/projects/README.md#createprojectforteam) - Create a project in a team
* [createProjectForWorkspace](docs/projects/README.md#createprojectforworkspace) - Create a project in a workspace
* [deleteProject](docs/projects/README.md#deleteproject) - Delete a project
* [duplicateProject](docs/projects/README.md#duplicateproject) - Duplicate a project
* [getProject](docs/projects/README.md#getproject) - Get a project
* [getProjects](docs/projects/README.md#getprojects) - Get multiple projects
* [getProjectsForTask](docs/projects/README.md#getprojectsfortask) - Get projects a task is in
* [getProjectsForTeam](docs/projects/README.md#getprojectsforteam) - Get a team's projects
* [getProjectsForWorkspace](docs/projects/README.md#getprojectsforworkspace) - Get all projects in a workspace
* [getTaskCountsForProject](docs/projects/README.md#gettaskcountsforproject) - Get task count of a project
* [projectSaveAsTemplate](docs/projects/README.md#projectsaveastemplate) - Create a project template from a project
* [removeCustomFieldSettingForProject](docs/projects/README.md#removecustomfieldsettingforproject) - Remove a custom field from a project
* [removeFollowersForProject](docs/projects/README.md#removefollowersforproject) - Remove followers from a project
* [removeMembersForProject](docs/projects/README.md#removemembersforproject) - Remove users from a project
* [updateProject](docs/projects/README.md#updateproject) - Update a project

### [sections](docs/sections/README.md)

* [addTaskForSection](docs/sections/README.md#addtaskforsection) - Add task to section
* [createSectionForProject](docs/sections/README.md#createsectionforproject) - Create a section in a project
* [deleteSection](docs/sections/README.md#deletesection) - Delete a section
* [getSection](docs/sections/README.md#getsection) - Get a section
* [getSectionsForProject](docs/sections/README.md#getsectionsforproject) - Get sections in a project
* [insertSectionForProject](docs/sections/README.md#insertsectionforproject) - Move or Insert sections
* [updateSection](docs/sections/README.md#updatesection) - Update a section

### [statusUpdates](docs/statusupdates/README.md)

* [createStatusForObject](docs/statusupdates/README.md#createstatusforobject) - Create a status update
* [deleteStatus](docs/statusupdates/README.md#deletestatus) - Delete a status update
* [getStatus](docs/statusupdates/README.md#getstatus) - Get a status update
* [getStatusesForObject](docs/statusupdates/README.md#getstatusesforobject) - Get status updates from an object

### [stories](docs/stories/README.md)

* [createStoryForTask](docs/stories/README.md#createstoryfortask) - Create a story on a task
* [deleteStory](docs/stories/README.md#deletestory) - Delete a story
* [getStoriesForTask](docs/stories/README.md#getstoriesfortask) - Get stories from a task
* [getStory](docs/stories/README.md#getstory) - Get a story
* [updateStory](docs/stories/README.md#updatestory) - Update a story

### [tags](docs/tags/README.md)

* [createTag](docs/tags/README.md#createtag) - Create a tag
* [createTagForWorkspace](docs/tags/README.md#createtagforworkspace) - Create a tag in a workspace
* [deleteTag](docs/tags/README.md#deletetag) - Delete a tag
* [getTag](docs/tags/README.md#gettag) - Get a tag
* [getTags](docs/tags/README.md#gettags) - Get multiple tags
* [getTagsForTask](docs/tags/README.md#gettagsfortask) - Get a task's tags
* [getTagsForWorkspace](docs/tags/README.md#gettagsforworkspace) - Get tags in a workspace
* [updateTag](docs/tags/README.md#updatetag) - Update a tag

### [tasks](docs/tasks/README.md)

* [addDependenciesForTask](docs/tasks/README.md#adddependenciesfortask) - Set dependencies for a task
* [addDependentsForTask](docs/tasks/README.md#adddependentsfortask) - Set dependents for a task
* [addFollowersForTask](docs/tasks/README.md#addfollowersfortask) - Add followers to a task
* [addProjectForTask](docs/tasks/README.md#addprojectfortask) - Add a project to a task
* [addTagForTask](docs/tasks/README.md#addtagfortask) - Add a tag to a task
* [createSubtaskForTask](docs/tasks/README.md#createsubtaskfortask) - Create a subtask
* [createTask](docs/tasks/README.md#createtask) - Create a task
* [deleteTask](docs/tasks/README.md#deletetask) - Delete a task
* [duplicateTask](docs/tasks/README.md#duplicatetask) - Duplicate a task
* [getDependenciesForTask](docs/tasks/README.md#getdependenciesfortask) - Get dependencies from a task
* [getDependentsForTask](docs/tasks/README.md#getdependentsfortask) - Get dependents from a task
* [getSubtasksForTask](docs/tasks/README.md#getsubtasksfortask) - Get subtasks from a task
* [getTask](docs/tasks/README.md#gettask) - Get a task
* [getTasks](docs/tasks/README.md#gettasks) - Get multiple tasks
* [getTasksForProject](docs/tasks/README.md#gettasksforproject) - Get tasks from a project
* [getTasksForSection](docs/tasks/README.md#gettasksforsection) - Get tasks from a section
* [getTasksForTag](docs/tasks/README.md#gettasksfortag) - Get tasks from a tag
* [getTasksForUserTaskList](docs/tasks/README.md#gettasksforusertasklist) - Get tasks from a user task list
* [removeDependenciesForTask](docs/tasks/README.md#removedependenciesfortask) - Unlink dependencies from a task
* [removeDependentsForTask](docs/tasks/README.md#removedependentsfortask) - Unlink dependents from a task
* [removeFollowerForTask](docs/tasks/README.md#removefollowerfortask) - Remove followers from a task
* [removeProjectForTask](docs/tasks/README.md#removeprojectfortask) - Remove a project from a task
* [removeTagForTask](docs/tasks/README.md#removetagfortask) - Remove a tag from a task
* [searchTasksForWorkspace](docs/tasks/README.md#searchtasksforworkspace) - Search tasks in a workspace
* [setParentForTask](docs/tasks/README.md#setparentfortask) - Set the parent of a task
* [updateTask](docs/tasks/README.md#updatetask) - Update a task

### [teamMemberships](docs/teammemberships/README.md)

* [getTeamMembership](docs/teammemberships/README.md#getteammembership) - Get a team membership
* [getTeamMemberships](docs/teammemberships/README.md#getteammemberships) - Get team memberships
* [getTeamMembershipsForTeam](docs/teammemberships/README.md#getteammembershipsforteam) - Get memberships from a team
* [getTeamMembershipsForUser](docs/teammemberships/README.md#getteammembershipsforuser) - Get memberships from a user

### [teams](docs/teams/README.md)

* [addUserForTeam](docs/teams/README.md#adduserforteam) - Add a user to a team
* [createTeam](docs/teams/README.md#createteam) - Create a team
* [getTeam](docs/teams/README.md#getteam) - Get a team
* [getTeamsForUser](docs/teams/README.md#getteamsforuser) - Get teams for a user
* [getTeamsForWorkspace](docs/teams/README.md#getteamsforworkspace) - Get teams in a workspace
* [removeUserForTeam](docs/teams/README.md#removeuserforteam) - Remove a user from a team
* [updateTeam](docs/teams/README.md#updateteam) - Update a team

### [timePeriods](docs/timeperiods/README.md)

* [getTimePeriod](docs/timeperiods/README.md#gettimeperiod) - Get a time period
* [getTimePeriods](docs/timeperiods/README.md#gettimeperiods) - Get time periods

### [typeahead](docs/typeahead/README.md)

* [typeaheadForWorkspace](docs/typeahead/README.md#typeaheadforworkspace) - Get objects via typeahead

### [userTaskLists](docs/usertasklists/README.md)

* [getUserTaskList](docs/usertasklists/README.md#getusertasklist) - Get a user task list
* [getUserTaskListForUser](docs/usertasklists/README.md#getusertasklistforuser) - Get a user's task list

### [users](docs/users/README.md)

* [getFavoritesForUser](docs/users/README.md#getfavoritesforuser) - Get a user's favorites
* [getUser](docs/users/README.md#getuser) - Get a user
* [getUsers](docs/users/README.md#getusers) - Get multiple users
* [getUsersForTeam](docs/users/README.md#getusersforteam) - Get users in a team
* [getUsersForWorkspace](docs/users/README.md#getusersforworkspace) - Get users in a workspace or organization

### [webhooks](docs/webhooks/README.md)

* [createWebhook](docs/webhooks/README.md#createwebhook) - Establish a webhook
* [deleteWebhook](docs/webhooks/README.md#deletewebhook) - Delete a webhook
* [getWebhook](docs/webhooks/README.md#getwebhook) - Get a webhook
* [getWebhooks](docs/webhooks/README.md#getwebhooks) - Get multiple webhooks
* [updateWebhook](docs/webhooks/README.md#updatewebhook) - Update a webhook

### [workspaceMemberships](docs/workspacememberships/README.md)

* [getWorkspaceMembership](docs/workspacememberships/README.md#getworkspacemembership) - Get a workspace membership
* [getWorkspaceMembershipsForUser](docs/workspacememberships/README.md#getworkspacemembershipsforuser) - Get workspace memberships for a user
* [getWorkspaceMembershipsForWorkspace](docs/workspacememberships/README.md#getworkspacemembershipsforworkspace) - Get the workspace memberships for a workspace

### [workspaces](docs/workspaces/README.md)

* [addUserForWorkspace](docs/workspaces/README.md#adduserforworkspace) - Add a user to a workspace or organization
* [getWorkspace](docs/workspaces/README.md#getworkspace) - Get a workspace
* [getWorkspaces](docs/workspaces/README.md#getworkspaces) - Get multiple workspaces
* [removeUserForWorkspace](docs/workspaces/README.md#removeuserforworkspace) - Remove a user from a workspace or organization
* [updateWorkspace](docs/workspaces/README.md#updateworkspace) - Update a workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
